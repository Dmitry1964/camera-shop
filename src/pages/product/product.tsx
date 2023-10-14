import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Tabs from '../../components/tabs/tabs';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ReviewsList from '../../components/reviews-list/reviews-list';
import SimilarProduct from '../../components/similar-product/similar-product';
import ModalReviewForm from '../../components/modal-review-form/modal-review-form';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProductCardData, fetchReviewsList, fetchSimilarProductsList, addReviewToServer } from '../../store/api-actons';
import ProductCardRate from '../../components/UI/product-card-rate/product-card-rate';
import { ProductType, UserReviewType } from '../../types/server-data-type';
import { RequestStatus } from '../../constants/const';


const Product = (): JSX.Element => {
  const { camerasId } = useParams();
  const id = Number(camerasId);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.productCard);
  const { name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, price, rating, reviewCount, type, category, level } = data;

  const [activeModal, setActiveModal] = useState({ addModal: false, succesModal: false });
  const changeStatusModal = () => setActiveModal({ ...activeModal, addModal: !activeModal.addModal });


  const similarDataList: ProductType[] = useAppSelector((state) => state.similarProductList);

  const loadStatus = useAppSelector((state) => state.loadSimilarListStatus);
  const reviewsList = useAppSelector((state) => state.reviewsList);

  const getSimilarList = () => {
    const similarList: ProductType[] = [];
    if (loadStatus === RequestStatus.Success) {
      similarDataList.forEach((item) => {
        if (item.level === level && item.category === category && item.type === type) {
          similarList.push(item);
        }
      });
    }
    return similarList;
  };

  const setUserReview = (formData: UserReviewType) => {
    formData.cameraId = id;
    dispatch(addReviewToServer(formData))
      .then(() => dispatch(fetchReviewsList(id)));
  };

  useEffect(() => {
    dispatch(fetchProductCardData(id))
      .then(() => dispatch(fetchSimilarProductsList(id)))
      .then(() => dispatch(fetchReviewsList(id)));
  }, [id, dispatch]);


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
                    <source type="image/webp" srcSet={`../${previewImgWebp}, ../${previewImgWebp2x}`} />
                    <img src={`../${previewImg}`} srcSet={`../${previewImg2x}`} width="560" height="480" alt={name} />
                  </picture>
                </div>
                <div className="product__content">
                  <h1 className="title title--h3">{name}</h1>
                  <ProductCardRate rating={rating} reviewCount={reviewCount} />
                  <p className="product__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString('ru-RU')} ₽</p>
                  <button className="btn btn--purple" type="button">
                    <svg width="24" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-add-basket"></use>
                    </svg>Добавить в корзину
                  </button>
                  <Tabs data={data} />
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <SimilarProduct similarList={getSimilarList()} />
          </div>
          <div className="page-content__section">
            <ReviewsList handleButtonAddReviewClick={changeStatusModal} reviewsList={reviewsList} />
          </div>
        </div>
        <ModalReviewForm isActive={activeModal.addModal} handleButtonCloseClick={changeStatusModal} setUserReview={setUserReview} />
      </main>
      <a className="up-btn" href="#header" >
        <svg width="12" height="18" aria-hidden="true">
          <use xlinkHref="#icon-arrow2"></use>
        </svg>
      </a>
      <Footer />
    </div>
  );
};

export default Product;
