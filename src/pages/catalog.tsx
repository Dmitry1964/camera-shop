import CamerasList from 'src/widgest/cameras/cameras-list';
import CatalogFilter from 'src/features/catalog-filter/catalog-filter';
import CatalogSort from 'src/features/catalog-sort/catalog-sort';
import Header from 'src/widgest/header/header';
import Banner from 'src/widgest/banner/banner';
import Breadcrumbs from 'src/features/breadcrumbs/breadcrumbs';
import Footer from 'src/widgest/footer/footer';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks/hooks';
import { useEffect } from 'react';
import { fetchCamerasAll, fetchPromoProduct } from 'src/app/store/app-actions';
import { FetchStatus } from 'src/shared/constans/requestData';
import usePagination from 'src/shared/hooks/hooks';
import Pagination from 'src/features/pagination/pagination';
import { PAGE_LIMIT } from 'src/shared/constans/others';

const Catalog = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.productList.status);
  const statusPromo = useAppSelector((state) => state.banner.status);
  const products = useAppSelector((state) => state.productList.products);


  useEffect(() => {
    if (status === FetchStatus.Idle) {
      dispatch(fetchCamerasAll());
    }
    if (statusPromo === FetchStatus.Idle) {
      dispatch(fetchPromoProduct());
    }
  }, [status, statusPromo, dispatch]);

  const {pageData, pageNumber, setPageNumber, paginationItems} = usePagination({items : products, pageLimit: PAGE_LIMIT});

  const camerasList = pageData();

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <Breadcrumbs />
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <CatalogFilter />
                <div className="catalog__content">
                  <CatalogSort />
                  {products && <CamerasList camerasList = {camerasList} />}
                  {products && <Pagination pageNumber = {pageNumber} changePage = {setPageNumber} paginationItems={paginationItems} />}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
