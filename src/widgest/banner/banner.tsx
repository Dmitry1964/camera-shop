import { FetchStatus } from 'src/shared/constans/requestData';
import { useAppSelector } from 'src/shared/hooks/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';


const Banner = (): JSX.Element => {
  const delay = 3000;
  const promoProducts = useAppSelector((state) => state.banner.promoProduct);
  const status = useAppSelector((state) => state.banner.status);
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay={{delay: delay}}
    >
      {status === FetchStatus.Fulfilled && promoProducts.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="banner">
            <picture>
              <source type="image/webp" srcSet={`${item.previewImgWebp}, ${item.previewImgWebp2x}`} />
              <img src={item.previewImg} srcSet={item.previewImg2x} width="1280" height="280" alt="баннер" />
            </picture>
            <p className="banner__info"><span className="banner__message">Новинка!</span><span className="title title--h1">{item.name}</span><span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span><a className="btn" href="#">Подробнее</a></p>
          </div>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
