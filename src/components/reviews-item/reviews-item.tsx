import { ReviewType } from '../../types/server-data-type';
import ProductCardRate from '../UI/product-card-rate/product-card-rate';
import { months } from '../../constants/const';


type ReviewItemProps = {
  reviewItem: ReviewType;
}

const ReviewsItem = ({reviewItem} : ReviewItemProps): JSX.Element => {
  const {userName, advantage, disadvantage, review, createAt, rating} = reviewItem;
  const reviewDate = new Date(createAt);
  const formatDate = `${months[reviewDate.getMonth()]} ${reviewDate.getFullYear()} г`;

  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime="2022-04-13">{formatDate}</time>
      </div>
      <ProductCardRate rating={rating} />
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review}</p>
        </li>
      </ul>
    </li>

  );
};

export default ReviewsItem;
