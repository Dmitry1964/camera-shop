import { createSlice } from '@reduxjs/toolkit';
import { fetchPromoProduct } from 'src/app/store/app-actions';
import { PromoProduct } from 'src/app/types/productType';
import { FetchStatus } from 'src/shared/constans/requestData';

interface BannerState {
  promoProduct: PromoProduct[];
  status: FetchStatus;
}

const initialState: BannerState = {
  promoProduct: [],
  status: FetchStatus.Idle,
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoProduct.pending, (state) => {
        state.status = FetchStatus.Pending
      })

      .addCase(fetchPromoProduct.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.promoProduct = action.payload;
      })

      .addCase(fetchPromoProduct.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});

export default bannerSlice.reducer;
