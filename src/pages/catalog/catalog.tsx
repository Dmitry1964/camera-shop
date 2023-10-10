import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ModalAddTtem from '../../components/modal-add-item/modal-add-item';
import ModalAddItemSucces from '../../components/modal-add-item-success/modal-add-item-succes';
import Loader from '../../components/loader/loader';
import Banner from '../../components/banner/banner';
import Pagination from '../../components/UI/pagination/pagination';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProductsList } from '../../store/api-actons';
import ProductCard from '../../components/product-card/product-card';
import { RequestStatus, magicNumbers } from '../../constants/const';
import { selectedProductBasket } from '../../store/actions';

const Catalog = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const loadStatus = useAppSelector((state) => state.loadProductListStatus);
  const products = useAppSelector((state) => state.productsList);
  const [count, setCount] = useState({ start: 0, end: magicNumbers.cardsOnPage });
  const productsOnPage = products.slice(count.start, count.end);
  const cahgePageCards = (item: number) => {
    const start = (item - 1) * magicNumbers.cardsOnPage;
    const end = item * magicNumbers.cardsOnPage;
    setCount({ ...count, start: start, end: end });
  };

  const [activeModal, setActiveModal] = useState({ addModal: false, succesModal: false });
  const changeStatusModal = () => setActiveModal({ ...activeModal, addModal: !activeModal.addModal });

  const handleButtonBuyClick = (id: number) => {
    const [product] = products.filter((camera) => camera.id === id);
    changeStatusModal();
    dispatch(selectedProductBasket(product));
  };

  const handleButtonAddClick = () => {
    changeStatusModal();
  };

  useEffect(() => {
    dispatch(fetchProductsList());
  }, [dispatch]);

  return (
    <div className="wrapper">
      {loadStatus === RequestStatus.Pending && <Loader />}
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <Breadcrumbs />
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <div className="catalog-filter">
                    <form action="#">
                      <h2 className="visually-hidden">Фильтр</h2>
                      <fieldset className="catalog-filter__block">
                        <legend className="title title--h5">Цена, ₽</legend>
                        <div className="catalog-filter__price-range">
                          <div className="custom-input">
                            <label>
                              <input type="number" name="price" placeholder="от" />
                            </label>
                          </div>
                          <div className="custom-input">
                            <label>
                              <input type="number" name="priceUp" placeholder="до" />
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="catalog-filter__block">
                        <legend className="title title--h5">Категория</legend>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="photocamera" checked /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Фотокамера</span>
                          </label>
                        </div>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="videocamera" /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Видеокамера</span>
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="catalog-filter__block">
                        <legend className="title title--h5">Тип камеры</legend>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="digital" checked /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Цифровая</span>
                          </label>
                        </div>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="film" disabled /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Плёночная</span>
                          </label>
                        </div>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="snapshot" /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Моментальная</span>
                          </label>
                        </div>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="collection" checked disabled /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Коллекционная</span>
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="catalog-filter__block">
                        <legend className="title title--h5">Уровень</legend>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="zero" checked /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Нулевой</span>
                          </label>
                        </div>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="non-professional" /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Любительский</span>
                          </label>
                        </div>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="professional" /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Профессиональный</span>
                          </label>
                        </div>
                      </fieldset>
                      <button className="btn catalog-filter__reset-btn" type="reset">Сбросить фильтры
                      </button>
                    </form>
                  </div>
                </div>
                <div className="catalog__content">
                  <div className="catalog-sort">
                    <form action="#">
                      <div className="catalog-sort__inner">
                        <p className="title title--h5">Сортировать:</p>
                        <div className="catalog-sort__type">
                          <div className="catalog-sort__btn-text">
                            <input type="radio" id="sortPrice" name="sort" checked />
                            <label htmlFor="sortPrice">по цене</label>
                          </div>
                          <div className="catalog-sort__btn-text">
                            <input type="radio" id="sortPopular" name="sort" />
                            <label htmlFor="sortPopular">по популярности</label>
                          </div>
                        </div>
                        <div className="catalog-sort__order">
                          <div className="catalog-sort__btn catalog-sort__btn--up">
                            <input type="radio" id="up" name="sort-icon" checked aria-label="По возрастанию" />
                            <label htmlFor="up">
                              <svg width="16" height="14" aria-hidden="true">
                                <use xlinkHref="#icon-sort"></use>
                              </svg>
                            </label>
                          </div>
                          <div className="catalog-sort__btn catalog-sort__btn--down">
                            <input type="radio" id="down" name="sort-icon" aria-label="По убыванию" />
                            <label htmlFor="down">
                              <svg width="16" height="14" aria-hidden="true">
                                <use xlinkHref="#icon-sort"></use>
                              </svg>
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="cards catalog__cards">
                    {productsOnPage.map((card, index) => (
                      <ProductCard data={card} key={card.id} index={index} handleButtonBuyClick={handleButtonBuyClick} />
                    ))}
                  </div>
                  <Pagination totalCards={products.length} limit={magicNumbers.cardsOnPage} cahgePageCards={cahgePageCards} />
                </div>
              </div>
            </div>
          </section>
        </div>
        <ModalAddTtem isActive={activeModal.addModal}
          handleButtonAddClick={handleButtonAddClick}
          changeStatusModal={changeStatusModal}
        />
        <ModalAddItemSucces isActive={activeModal.succesModal} />
      </main>
      <Footer />
    </div>
  );
};
export default Catalog;
