import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from 'src/app/store/app-actions';
import { ProductCategory, ProductLevel, ProductType, ProductTypes } from 'src/app/types/productType';
import { FetchStatus } from 'src/shared/constans/requestData';

interface ProducrState {
  status: FetchStatus;
  product: ProductTypes;
}

const initialState : ProducrState = {
  product: {
    id: 0,
    name: '',
    vendorCode: '',
    type: ProductType.none,
    category: ProductCategory.none,
    description: '',
    level: ProductLevel.none,
    price: 0,
    rating: 0,
    reviewCount: 0,
    previewImg: '',
    previewImg2x: '',
    previewImgWebp: '',
    previewImgWebp2x: ''
  },
  status: FetchStatus.Idle,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.product = action.payload;
      })

      .addCase(fetchProduct.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});


export default productSlice.reducer;
