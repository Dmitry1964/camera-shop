import { useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/app/store/store';
import { ProductTypes } from 'src/app/types/productType';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type UsePaginationProps = {
  items: ProductTypes[];
  pageLimit: number;
};

const usePagination = ({ items, pageLimit }: UsePaginationProps) => {
  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = Math.ceil(items.length / pageLimit);
  const pageData = (): ProductTypes[] => {
    const startIndex = pageNumber * pageLimit;
    const endIndex = startIndex + pageLimit;
    return items.slice(startIndex, endIndex);
  };
  const paginationItems = [];

  for (let i = 1; i <= pageCount; i++) {
    paginationItems.push(i);
  }

  return { pageNumber, pageCount, pageData, setPageNumber, paginationItems};
};

export default usePagination;
