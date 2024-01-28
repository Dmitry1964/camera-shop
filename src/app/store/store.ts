import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productList from 'src/app/reducers/products-list/productsListSlice';

const rootReducer = combineReducers({
  productList
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
