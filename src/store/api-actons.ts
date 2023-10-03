import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/store-type';
import { AxiosInstance } from 'axios';
import { ProductType, PromoOfferType } from '../types/server-data-type';
import { RequestRoute } from '../constants/const';
import { LoadSimilarProductList, loadProductData, loadProductsList, loadPromoOffersList } from './actions';

export const fetchProductsList = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >('data/fetchProductsList', async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<ProductType[]>(RequestRoute.Cameras);
    dispatch(loadProductsList(data));
  });


export const fetchSimilarProductsList = createAsyncThunk<
  void,
  ProductType['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >('data/fetchsimilarProductsList', async (idProduct, {dispatch, extra: api}) => {
    const {data} = await api.get<ProductType[]>(`${RequestRoute.Cameras}/${idProduct}${RequestRoute.Similar}`);
    dispatch(LoadSimilarProductList(data));
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

export const fetchProductCardData = createAsyncThunk<
  void,
  ProductType['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >('data/fetchProductCard', async(idProduct, {dispatch, extra: api}) => {
    const {data} = await api.get<ProductType>(`${RequestRoute.Cameras}/${idProduct}`);
    dispatch(loadProductData(data));
  });
