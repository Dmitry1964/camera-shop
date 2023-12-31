import { ProductType, PromoOfferType, ReviewType } from './server-data-type';
import { store } from '../store';
import { RequestStatus } from '../constants/const';

export type StoreType = {
  productsList: ProductType[];
  productCard: ProductType;
  similarProductList: ProductType[];
  promoOffersList: PromoOfferType[];
  loadProductListStatus: RequestStatus;
  loadSimilarListStatus: RequestStatus;
  loadReviewsListStatus: RequestStatus;
  loadProductCardStatus: RequestStatus;
  reviewsList: ReviewType[];
  basket: ProductType[];
  selectedProduct: ProductType;
  userReview: ReviewType;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
