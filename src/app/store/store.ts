import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productList from 'src/app/reducers/products-list/productsListSlice';
import banner from 'src/app/reducers/banner/bannerSlice';

const rootReducer = combineReducers({
  productList,
  banner
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
