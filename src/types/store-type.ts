import { ProductType, PromoOfferType } from './server-data-type';
import { store } from '../store';
import { RequestStatus } from '../constants/const';

export type StoreType = {
  productsList: ProductType[];
  productCard: ProductType;
  similarProductList: ProductType[];
  loadProductListStatys: RequestStatus;
  promoOffersList: PromoOfferType[];
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
