import { createReducer } from '@reduxjs/toolkit';
import { StoreType } from '../types/store-type';
import {
  TypeProduct,
  CategoryProduct,
  LevelProduct,
  RequestStatus,
} from '../constants/const';
import { LoadSimilarProductList, loadProductData, loadProductsList, loadPromoOffersList } from './actions';
import { fetchProductsList } from './api-actons';

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
  loadProductListStatys: RequestStatus.Idle,
};

const reducer = createReducer(initialState, (builder) => {
  // загрузка списка продуктов
  builder.addCase(loadProductsList, (state, action) => {
    state.productsList = action.payload;
  });
  builder.addCase(fetchProductsList.pending, (state) => {
    state.loadProductListStatys = RequestStatus.Pending;
  });
  builder.addCase(fetchProductsList.fulfilled, (state) => {
    state.loadProductListStatys = RequestStatus.Success;
  });
  builder.addCase(fetchProductsList.rejected, (state) => {
    state.loadProductListStatys = RequestStatus.Reject;
  });

  // загрузка списка похожих товаров
  builder.addCase(LoadSimilarProductList, (state, action) => {
    state.similarProductList = action.payload;
  });

  // загрузка спмска промо предложений
  builder.addCase(loadPromoOffersList, (state, action) => {
    state.promoOffersList = action.payload;
  });

  // загрузка карточки товара
  builder.addCase(loadProductData, (state, action) => {
    state.productCard = action.payload;
  });

});

export { reducer };
