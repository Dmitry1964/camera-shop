import { ProductTypes } from 'src/app/types/productType';
import StarsRating from '../rating/stars-rating';
import { AppRoutes } from 'src/shared/constans/routes';
import { Link } from 'react-router-dom';

type ProductCardProps = {
  data: ProductTypes;
}

const ProductCard = ({data} : ProductCardProps) => {
  const {previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, rating, reviewCount, name, price, id} = data;
  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x}`} />
          <img src={previewImg} srcSet={previewImg2x} width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <StarsRating rating = {rating} />
          <p className="visually-hidden">Рейтинг: {rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>
          {`${price.toLocaleString('ru-RU')} ₽`}
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <Link className="btn btn--transparent" to={`${AppRoutes.Product}/${id}`}>Подробнее
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
