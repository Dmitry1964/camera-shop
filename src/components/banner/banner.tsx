import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchPromoOffersList } from '../../store/api-actons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Banner = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const promoOffersList = useAppSelector((state) => state.promoOffersList);

  useEffect(() => {
    dispatch(fetchPromoOffersList());
  }, [dispatch]);

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {Object.values(promoOffersList).map((item) => (
        <SwiperSlide key={item.id}>
          <div className="banner">
            <picture>
              <source type="image/webp" srcSet={`${item.previewImgWebp}, ${item.previewImgWebp2x}`} />
              <img src={item.previewImg} srcSet={item.previewImg2x} width="1280" height="280" alt="баннер" />
            </picture>
            <p className="banner__info">
              <span className="banner__message">Новинка!</span>
              <span className="title title--h1">{item.name}</span>
              <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
              <a className="btn" href="#">Подробнее</a>
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  );
};


export default Banner;
