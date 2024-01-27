import { createSlice } from '@reduxjs/toolkit';
import { ProductsList } from 'src/app/types/productType';

interface ProductsState {
  products: ProductsList;
}

const initialState: ProductsState = {
  products: [],
};

const productsListSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
    fetch: (store) => {},
  },
});

export const {fetch} = productsListSlice.actions;

export default productsListSlice.reducer;
