import StarItem from '../UI/star-item/star-item';
import { ratingStars } from '../../constants/const';
import { useState, useEffect } from 'react';
import { UserReviewType } from '../../types/server-data-type';
import cn from 'classnames';

type ModalReviewFormType = {
  isActive: boolean;
  handleButtonCloseClick: () => void;
}

const ModalReviewForm = ({ isActive, handleButtonCloseClick }: ModalReviewFormType): JSX.Element => {
  const [formData, setFormData] = useState<UserReviewType>({
    id: 0,
    userName: '',
    advantage: '',
    disadvantage: '',
    review: '',
    rating: 0,
  });

  const handleInputFieldChange = (rating: string) => {
    setFormData({ ...formData, rating: parseInt(rating, 10) });
  };

  useEffect(() => {
    const close = (evt: { keyCode: number }) => {
      if (evt.keyCode === 27 && isActive) {
        handleButtonCloseClick();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [handleButtonCloseClick, isActive]);


  return (
    <div
      onClick={handleButtonCloseClick}
      className={cn('modal', { 'is-active': isActive })}
    >
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">
            <form method="post">
              <div className="form-review__rate">
                <fieldset className="rate form-review__item">
                  <legend className="rate__caption">Рейтинг
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </legend>
                  <div className="rate__bar">
                    <div className="rate__group">
                      {ratingStars.map((item) => (
                        <StarItem star={item} handleInputFieldChange={handleInputFieldChange} key={item.id} />
                      ))}
                    </div>
                    <div className="rate__progress"><span className="rate__stars">{formData.rating}</span> <span>/</span> <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                  <p className="rate__message">Нужно оценить товар</p>
                </fieldset>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Ваше имя
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      value={formData?.userName}
                      onChange={(evt: { target: { value: string } }) => setFormData({ ...formData, userName: evt.target.value })}
                      type="text"
                      name="user-name"
                      placeholder="Введите ваше имя"
                      required
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать имя</p>
                </div>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Достоинства
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      value={formData?.advantage}
                      onChange={(evt: { target: { value: string } }) => setFormData({ ...formData, advantage: evt.target.value })}
                      type="text"
                      name="user-plus"
                      placeholder="Основные преимущества товара"
                      required
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать достоинства</p>
                </div>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Недостатки
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      value={formData?.disadvantage}
                      onChange={(evt: { target: { value: string } }) => setFormData({ ...formData, disadvantage: evt.target.value })}
                      type="text"
                      name="user-minus"
                      placeholder="Главные недостатки товара"
                      required
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать недостатки</p>
                </div>
                <div className="custom-textarea form-review__item">
                  <label>
                    <span className="custom-textarea__label">Комментарий
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <textarea
                      value={formData?.review}
                      onChange={(evt: { target: { value: string } }) => setFormData({ ...formData, review: evt.target.value })}
                      name="user-comment"
                      minLength={5}
                      placeholder="Поделитесь своим опытом покупки"
                    >
                    </textarea>
                  </label>
                  <div className="custom-textarea__error">Нужно добавить комментарий</div>
                </div>
              </div>
              <button className="btn btn--purple form-review__btn" type="submit">Отправить отзыв</button>
            </form>
          </div>
          <button
            onClick={handleButtonCloseClick}
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
          >
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>

  );
};

export default ModalReviewForm;
