import { RequestRoute } from '../../constants/const';
import { ProductType } from '../../types/server-data-type';
import ProductCardRate from '../UI/product-card-rate/product-card-rate';
import { Link } from 'react-router-dom';
import cn from 'classnames';

type ProductCardProps = {
  data: ProductType;
  active?: number[];
  index: number;
}
const ProductCard = ({ data, active, index }: ProductCardProps): JSX.Element => {
  const { id, name, reviewCount, rating, price, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = data;
  const productDetailedRef = `${RequestRoute.Cameras}/${id}`;

  return (
    <div className={cn('product-card', { 'is-active': active?.includes(index) })}>
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`../${previewImgWebp}, ../${previewImgWebp2x}`} />
          <img src={`../${previewImg}`} srcSet={previewImg2x} width="280" height="240" alt={name} />
        </picture>
      </div>
      <div className="product-card__info">
        <ProductCardRate rating={rating} reviewCount={reviewCount} />
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} &#8381;
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <Link to={productDetailedRef} className="btn btn--transparent">Подробнее
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
