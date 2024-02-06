import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productList from 'src/app/reducers/products-list/productsListSlice';
import banner from 'src/app/reducers/banner/bannerSlice';
import product from 'src/app/reducers/product/productSlice';
import similarProducts from 'src/app/reducers/similarProducts/similarProductsSlice';

const rootReducer = combineReducers({
  productList,
  banner,
  product,
  similarProducts
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
