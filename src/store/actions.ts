import {createAction} from '@reduxjs/toolkit';
import { ProductType, PromoOfferType } from '../types/server-data-type';
import { ActionsNames } from '../constants/const';


export const loadProductsList = createAction<ProductType[]>(ActionsNames.LoadProductList);
export const loadPromoOffersList = createAction<PromoOfferType[]>(ActionsNames.LoadPromoOffersList);
export const checkLoadProductListStatus = createAction(ActionsNames.CheckProductListStatus);
