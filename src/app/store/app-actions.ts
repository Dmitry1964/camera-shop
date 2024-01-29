import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAPI } from 'src/shared/api/apiRequest';
import { ProductTypes, PromoProduct } from '../types/productType';
import { FetchRoutes } from 'src/shared/constans/routes';
import { ApiActions } from 'src/shared/constans/requestData';

const api = createAPI();

export const fetchCamerasAll = createAsyncThunk(ApiActions.DataFetchCameras, async () => {
  const {data} = await api.get<ProductTypes[]>(FetchRoutes.Cameras);
  return data;
});

export const fetchPromoProduct = createAsyncThunk(ApiActions.DataFetchPromo, async () => {
  const {data} = await api.get<PromoProduct[]>(FetchRoutes.Promo);
  return data;
});
