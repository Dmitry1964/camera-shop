import { createReducer } from '@reduxjs/toolkit';
import { StoreType } from '../types/store-type';
import {
  TypeProduct,
  CategoryProduct,
  LevelProduct,
  RequestStatus,
} from '../constants/const';
import {
  LoadSimilarProductList,
  loadProductData,
  loadProductsList,
  loadPromoOffersList,
  loadReviewsList,
} from './actions';
import { fetchProductsList, fetchSimilarProductsList } from './api-actons';

const initialState: StoreType = {
  productsList: [],
  promoOffersList: [],
  productCard: {
    id: 0,
    name: '',
    vendorCode: '',
    type: TypeProduct.NoType,
    category: CategoryProduct.NoCategory,
    description: '',
    level: LevelProduct.NoLevel,
    price: 0,
    rating: 0,
    reviewCount: 0,
    previewImg: '',
    previewImg2x: '',
    previewImgWebp: '',
    previewImgWebp2x: '',
  },
  similarProductList: [],
  reviewsList: [],
  loadProductListStatus: RequestStatus.Idle,
  loadSimilarListStatus: RequestStatus.Idle,
};

const reducer = createReducer(initialState, (builder) => {
  // загрузка списка продуктов
  builder.addCase(loadProductsList, (state, action) => {
    state.productsList = action.payload;
  });
  builder.addCase(fetchProductsList.pending, (state) => {
    state.loadProductListStatus = RequestStatus.Pending;
  });
  builder.addCase(fetchProductsList.fulfilled, (state) => {
    state.loadProductListStatus = RequestStatus.Success;
  });
  builder.addCase(fetchProductsList.rejected, (state) => {
    state.loadProductListStatus = RequestStatus.Reject;
  });

  // загрузка списка похожих товаров
  builder.addCase(LoadSimilarProductList, (state, action) => {
    state.similarProductList = action.payload;
  });
  builder.addCase(fetchSimilarProductsList.pending, (state) => {
    state.loadSimilarListStatus = RequestStatus.Pending;
  });
  builder.addCase(fetchSimilarProductsList.fulfilled, (state) => {
    state.loadSimilarListStatus = RequestStatus.Success;
  });


  // загрузка спмска промо предложений
  builder.addCase(loadPromoOffersList, (state, action) => {
    state.promoOffersList = action.payload;
  });

  // загрузка карточки товара
  builder.addCase(loadProductData, (state, action) => {
    state.productCard = action.payload;
  });

  // загрузка списка отзывов
  builder.addCase(loadReviewsList, (state, action) => {
    state.reviewsList = action.payload;
})

});

export { reducer };
