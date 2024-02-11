import { ProductTypes } from 'src/app/types/productType';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import StarsRating from 'src/features/rating/stars-rating';
import './similar-product.css';

type ProductsSimilarProps = {
  similarList: ProductTypes[];
}

const ProductsSimilar = ({ similarList }: ProductsSimilarProps) => {

  const SwiperNavigation = () => {
    const swiper = useSwiper();

    const slideNext = () => {
      swiper.slideNext();
    };

    const slidePrev = () => {
      swiper.slidePrev();
    };
    return (
      <div className='navigation-btns'>
        <button onClick={slidePrev} style={{ zIndex: 100, pointerEvents: 'all' }} className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд">
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
        <button onClick={slideNext} style={{ zIndex: 100, pointerEvents: 'all' }} className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд">
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
      </div>
    );
  };

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
          // navigation
          >
            {similarList.map((item, index) => (
              <SwiperSlide key={item.id} virtualIndex={index}>
                <div className="product-car is-active slider-item">
                  <div className="product-card__img">
                    <picture>
                      <source type="image/webp" srcSet={`/${item.previewImgWebp}, /${item.previewImgWebp2x}`} />
                      <img src={`/${item.previewImg}`} srcSet={`/${item.previewImg2x}`} width="280" height="240" alt="Фотоаппарат FastShot MR-5" />
                    </picture>
                  </div>
                  <div className="product-card__info">
                    <div className="rate product-card__rate">
                      <StarsRating rating={item.rating} />
                      <p className="visually-hidden">{`Рейтинг ${item.rating}`}</p>
                      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{item.reviewCount}</p>
                    </div>
                    <p className="product-card__title">{item.name}</p>
                    <p className="product-card__price"><span className="visually-hidden">Цена:</span>{`${item.price.toLocaleString('ru-RU')} ₽`}
                    </p>
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn--purple product-card__btn" type="button">Купить
                    </button>
                    <a className="btn btn--transparent" href="#">Подробнее
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavigation />
          </Swiper>
          {/* <button className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд" disabled>
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
          <button className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд">
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default ProductsSimilar;
