import { ProductType } from '../../types/server-data-type';
import ProductCardRate from '../UI/product-card-rate/product-card-rate';

type ProductCardProps = {
  data: ProductType;
}
const ProductCard = ({data} : ProductCardProps): JSX.Element => {
  const {name, reviewCount, rating, price, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x} = data;
  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x}`} /><img src={previewImg} srcSet={previewImg2x} width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
        </picture>
      </div>
      <div className="product-card__info">
        <ProductCardRate rating = {rating} reviewCount = {reviewCount} />
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} &#8381;
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <a className="btn btn--transparent" href="#">Подробнее
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
