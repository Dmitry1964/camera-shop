import CamerasList from 'src/widgest/cameras/cameras-list';
import CatalogFilter from 'src/features/catalog-filter/catalog-filter';
import CatalogSort from 'src/features/catalog-sort/catalog-sort';
import Header from 'src/widgest/header/header';
import Banner from 'src/widgest/banner/banner';
import Breadcrumbs from 'src/features/breadcrumbs/breadcrumbs';
import Footer from 'src/widgest/footer/footer';

const Catalog = (): JSX.Element => {
  const a = 2;
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
                  <CamerasList />
                  <div className="pagination">
                    <ul className="pagination__list">
                      <li className="pagination__item"><a className="pagination__link pagination__link--active" href="1">1</a>
                      </li>
                      <li className="pagination__item"><a className="pagination__link" href="2">2</a>
                      </li>
                      <li className="pagination__item"><a className="pagination__link" href="3">3</a>
                      </li>
                      <li className="pagination__item"><a className="pagination__link pagination__link--text" href="2">Далее</a>
                      </li>
                    </ul>
                  </div>
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
