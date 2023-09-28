import { createReducer } from '@reduxjs/toolkit';
import { StoreType } from '../types/store-type';
import { TypeProduct, CategoryProduct, LevelProduct } from '../constants/const';

const initialState : StoreType = {
  productsList: [],
  productItem: {
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
  similarProductList: []
};

const reducer = createReducer(initialState, (builder) => {

});

export {reducer};

