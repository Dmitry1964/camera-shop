import ProductCard from 'src/features/product-card/product-card';
import { PAGE_LIMIT } from 'src/shared/constans/others';
import usePagination, { useAppSelector } from 'src/shared/hooks/hooks';
import Pagination from 'src/features/pagination/pagination';


const CamerasList = (): JSX.Element => {

  const products = useAppSelector((state) => state.productList.products);
  const { pageData, pageNumber, setPageNumber, paginationItems} = usePagination({ items: products, pageLimit: PAGE_LIMIT });

  const camerasList = pageData();

  return (
    <>
      <div className="cards catalog__cards">
        {camerasList && camerasList.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
      {products && <Pagination pageNumber={pageNumber} changePage={setPageNumber} paginationItems={paginationItems} />}
    </>
  );
}
export default CamerasList;
