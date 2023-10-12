import { ReviewType } from '../../types/server-data-type';
import ReviewsItem from '../reviews-item/reviews-item';
import { useState } from 'react';

type ReviewsListProps = {
  reviewsList: ReviewType[];
}

const ReviewsList = ({ reviewsList }: ReviewsListProps): JSX.Element => {
  const [previewsCount, setPreviewsCount] = useState(3);

  const reviewsListSort = [...reviewsList].sort((a: ReviewType, b: ReviewType) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()).slice(0, previewsCount);
  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button">Оставить свой отзыв</button>
        </div>
        <ul className="review-block__list">
          {reviewsListSort.map((item) => (
            <ReviewsItem reviewItem={item} key={item.id} />
          ))}
        </ul>
        {reviewsListSort.length < reviewsList.length &&
          <div className="review-block__buttons">
            <button onClick={() => setPreviewsCount(previewsCount + 3)} className="btn btn--purple" type="button">Показать больше отзывов
            </button>
          </div>}
      </div>
    </section>

  );
};

export default ReviewsList;
