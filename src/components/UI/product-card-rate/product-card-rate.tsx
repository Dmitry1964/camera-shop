import { StarsColor, FIVE_STARS } from '../../../constants/const';

type ProductCardRateProps = {
  rating: number;
  reviewCount: number;
}

const ProductCardRate = ({ rating, reviewCount }: ProductCardRateProps): JSX.Element => {
  const stars = [];
  for (let i = 1; i <= FIVE_STARS; i++) {
    stars.push(
      i <= rating ? StarsColor.Yellow : StarsColor.Gray
    );
  }
  return (
    <div className="rate product-card__rate">
      {stars.map((item) => (
        item === StarsColor.Yellow
          ?
          <svg width="17" height="16" aria-hidden="true" key={item}>
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          :
          <svg width="17" height="16" aria-hidden="true" key={item}>
            <use xlinkHref="#icon-star"></use>
          </svg>
      ))}
      <p className="visually-hidden">Рейтинг: {rating}</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
    </div>
  );
};

export default ProductCardRate;
