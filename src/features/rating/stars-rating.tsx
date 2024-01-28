import { STARS_VALUE } from 'src/shared/constans/others';

type StarsRatingProps = {
  rating: number;
}

const StarsRating = ({ rating }: StarsRatingProps): JSX.Element => {
  const stars: number[] = [];
  for (let i = 1; i <= STARS_VALUE; i++) {
    stars.push(i);
  }
  return (
    <div>
      {stars.map((item) => (
        item <= rating ?
          <svg width="17" height="16" aria-hidden="true" key={item}>
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          :
          <svg width="17" height="16" aria-hidden="true" key={item}>
            <use xlinkHref="#icon-star"></use>
          </svg>
      ))}
    </div>
  );
};

export default StarsRating;
