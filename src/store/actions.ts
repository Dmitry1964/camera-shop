import {createAction} from '@reduxjs/toolkit';
import { ProductType } from '../types/server-data-type';
import { ActionsNames } from '../constants/const';


export const loadProductsList = createAction<ProductType[]>(ActionsNames.LoadProductList);
export const checkLoadProductListStatus = createAction(ActionsNames.CheckProductListStatus);
export const changePageNumber = createAction<number>(ActionsNames.ChangePageNumber);
