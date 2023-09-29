import { StarsColor, magicNumbers } from '../../../constants/const';

type ProductCardRateProps = {
  rating: number;
  reviewCount: number;
}

const ProductCardRate = ({ rating, reviewCount }: ProductCardRateProps): JSX.Element => {
  const stars = [];
  for (let i = 1; i <= magicNumbers.fiveStars; i++) {
    stars.push(
      i <= rating ? StarsColor.Yellow : StarsColor.Gray
    );
  }
  return (
    <div className="rate product-card__rate">
      {stars.map((item, index) => (
        item === StarsColor.Yellow
          ?
          // eslint-disable-next-line react/no-array-index-key
          <svg width="17" height="16" aria-hidden="true" key={index}>
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          :
          // eslint-disable-next-line react/no-array-index-key
          <svg width="17" height="16" aria-hidden="true" key={index}>
            <use xlinkHref="#icon-star"></use>
          </svg>
      ))}
      <p className="visually-hidden">Рейтинг: {rating}</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
    </div>
  );
};

export default ProductCardRate;
