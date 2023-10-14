import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ModalAddTtem from '../../components/modal-add-item/modal-add-item';
import ModalAddItemSucces from '../../components/modal-add-item-success/modal-add-item-succes';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sotr';
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
                <CatalogFilter />
                <div className="catalog__content">
                  <CatalogSort />
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
