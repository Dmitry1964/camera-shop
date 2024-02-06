import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct, fetchSimilarProducts } from 'src/app/store/app-actions';
import Breadcrumbs from 'src/features/breadcrumbs/breadcrumbs';
import StarsRating from 'src/features/rating/stars-rating';
import Reviews from 'src/features/reviews/reviews';
import { FetchStatus } from 'src/shared/constans/requestData';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks/hooks';
import Footer from 'src/widgest/footer/footer';
import Header from 'src/widgest/header/header';
import ProductsSimilar from 'src/widgest/similar-products/products-similar';

const Product = () => {
  const { prod } = useParams();
  const dispatch = useAppDispatch();
  const id = prod ? parseInt(prod, 10) : 0;
  const fetchProductsStatus = useAppSelector((state) => state.product.status);
  const fetchSimilarStatus = useAppSelector((state) => state.similarProducts.status);
  const { name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, rating, reviewCount, price, vendorCode, category, level, type, description } = useAppSelector((state) => state.product.product);
  const similarList = useAppSelector((state) => state.similarProducts.products);

  useEffect(() => {
    if (fetchProductsStatus === FetchStatus.Idle) {
      dispatch(fetchProduct(id));
    }
    if (fetchSimilarStatus === FetchStatus.Idle) {
      dispatch(fetchSimilarProducts(id));
    }

  }, [dispatch, fetchProductsStatus, id, fetchSimilarStatus]);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs />
          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x}`} />
                    <img src={`/${previewImg}`} srcSet={`/${previewImg2x}`} width="560" height="480" alt="Ретрокамера Das Auge IV" />
                  </picture>
                </div>
                <div className="product__content">
                  <h1 className="title title--h3">{name}</h1>
                  <div className="rate product__rate">
                    <StarsRating rating={rating} />
                    <p className="visually-hidden">{`Рейтинг ${rating}`}</p>
                    <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
                  </div>
                  <p className="product__price"><span className="visually-hidden">Цена:</span>{`${price.toLocaleString('ru-RU')} ₽`}</p>
                  <button className="btn btn--purple" type="button">
                    <svg width="24" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-add-basket"></use>
                    </svg>Добавить в корзину
                  </button>
                  <div className="tabs product__tabs">
                    <div className="tabs__controls product__tabs-controls">
                      <button className="tabs__control" type="button">Характеристики</button>
                      <button className="tabs__control is-active" type="button">Описание</button>
                    </div>
                    <div className="tabs__content">
                      <div className="tabs__element">
                        <ul className="product__tabs-list">
                          <li className="item-list"><span className="item-list__title">Артикул:</span>
                            <p className="item-list__text">{vendorCode}</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Категория:</span>
                            <p className="item-list__text">{category}</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                            <p className="item-list__text">{type}</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Уровень:</span>
                            <p className="item-list__text">{level}</p>
                          </li>
                        </ul>
                      </div>
                      <div className="tabs__element is-active">
                        <div className="product__tabs-text">
                          {description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            {similarList.length > 0 && <ProductsSimilar similarList={similarList} />}
          </div>
          <div className="page-content__section">
            <Reviews />
          </div>
        </div>
      </main>
      <a className="up-btn" href="#header">
        <svg width="12" height="18" aria-hidden="true">
          <use xlinkHref="#icon-arrow2"></use>
        </svg>
      </a>
      <Footer />
    </div>
  );
};
export default Product;
