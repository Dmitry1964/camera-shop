import {createAction} from '@reduxjs/toolkit';
import { ProductType, PromoOfferType } from '../types/server-data-type';
import { ActionsNames } from '../constants/const';


export const loadProductsList = createAction<ProductType[]>(ActionsNames.LoadProductList);
export const LoadSimilarProductList = createAction<ProductType[]>(ActionsNames.LoadSimilarProductList);
export const loadPromoOffersList = createAction<PromoOfferType[]>(ActionsNames.LoadPromoOffersList);
export const loadProductData = createAction<ProductType>(ActionsNames.LoadProductCard);
export const checkLoadProductListStatus = createAction(ActionsNames.CheckProductListStatus);
