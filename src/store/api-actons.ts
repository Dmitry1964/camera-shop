import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/store-type';
import { AxiosInstance } from 'axios';
import { ProductType } from '../types/server-data-type';
import { RequestRoute } from '../constants/const';
import { loadProductsList } from './actions';

export const fetchProductsList = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >('data/fetchProducts', async (aaa, {dispatch, extra: api}) => {
    const {data} = await api.get<ProductType[]>(`${RequestRoute.Cameras}${aaa}`);
    dispatch(loadProductsList(data));

  });

