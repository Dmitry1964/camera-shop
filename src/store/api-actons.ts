import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/store-type';
import { AxiosInstance } from 'axios';
import { ProductType, PromoOfferType } from '../types/server-data-type';
import { RequestRoute } from '../constants/const';
import { loadProductsList, loadPromoOffersList } from './actions';

export const fetchProductsList = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >('data/fetchProducts', async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<ProductType[]>(`${RequestRoute.Cameras}?_limit=40`);
    dispatch(loadProductsList(data));
  });

export const fetchPromoOffersList = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >('data/fetchPromoOffersList', async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<PromoOfferType[]>(RequestRoute.Promo);
    dispatch(loadPromoOffersList(data));
  });
