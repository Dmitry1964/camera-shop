import { createSlice } from '@reduxjs/toolkit';
import { fetchSimilarProducts } from 'src/app/store/app-actions';
import { FetchStatus } from 'src/shared/constans/requestData';
import { ProductsState } from '../products-list/productsListSlice';

const initialState : ProductsState = {
  products: [],
  status: FetchStatus.Idle
};

const similarProductSlice = createSlice({
  name: 'similar-products',
  initialState,
  reducers: {
    changeFetchStatus: (state) => {
      state.status = FetchStatus.Idle;
    },

    removeSimilarProducts: (state) => {
      state.products = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSimilarProducts.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.products = state.products.concat(action.payload);
      })

      .addCase(fetchSimilarProducts.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});


export const {changeFetchStatus, removeSimilarProducts} = similarProductSlice.actions;

export default similarProductSlice.reducer;
