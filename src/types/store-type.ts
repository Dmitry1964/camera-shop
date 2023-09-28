import { ProductType } from './server-data-type';

export type StoreType = {
  productsList: ProductType[];
  productItem: ProductType;
  similarProductList: ProductType[];
}
