import { createSlice } from '@reduxjs/toolkit';
import { fetchCamerasAll } from 'src/app/store/app-actions';
import { ProductTypes} from 'src/app/types/productType';
import { FetchStatus } from 'src/shared/constans/requestData';

interface ProductsState {
  products: ProductTypes[];
  status: FetchStatus;
}

const initialState: ProductsState = {
  products: [],
  status: FetchStatus.Idle,
};

const productsListSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasAll.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchCamerasAll.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.products = state.products.concat(action.payload);
      })

      .addCase(fetchCamerasAll.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});

export default productsListSlice.reducer;
