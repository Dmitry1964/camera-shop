import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAPI } from 'src/shared/api/apiRequest';
import { ProductsList } from '../types/productType';
import { FetchRoutes } from 'src/shared/constans/routes';

export enum ApiActions {
  DataFetchCameras = 'data/fetchCameras',
}



const api = createAPI();

export const fetchCamerasAll = createAsyncThunk(ApiActions.DataFetchCameras, async () => {
  const {data} = await api.get<ProductsList>(FetchRoutes.Cameras);
  return data;
});
