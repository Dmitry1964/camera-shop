import { ProductType } from './server-data-type';
import { store } from '../store';
import { RequestStatus } from '../constants/const';

export type StoreType = {
  productsList: ProductType[];
  productItem: ProductType;
  similarProductList: ProductType[];
  loadProductListStatys: RequestStatus;
  catalogPage: number;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
