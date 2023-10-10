import cn from 'classnames';
import { useAppSelector } from '../../hooks/hooks';
import {useEffect} from 'react';

type ModalAddTtemProps = {
  isActive: boolean;
  handleButtonAddClick: () => void;
  changeStatusModal: () => void;
}

const ModalAddTtem = ({ isActive, handleButtonAddClick, changeStatusModal }: ModalAddTtemProps): JSX.Element => {
  const camera = useAppSelector((state) => state.selectedProduct);
  const { name, vendorCode, type, level, price, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = camera;

  useEffect(() =>{
    const close = (evt: { keyCode: number }) => {
      if(evt.keyCode === 27) {
        changeStatusModal();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  },[changeStatusModal]);

  return (
    <div
      onClick={changeStatusModal}
      className={cn('modal', { 'is-active': isActive })}
    >
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
          <p className="title title--h4">Добавить товар в корзину</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x}`} />
                <img src={previewImg} srcSet={previewImg2x} width="140" height="120" alt="Фотоаппарат «Орлёнок»" />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{type}</li>
                <li className="basket-item__list-item">{`${level} уровень`}</li>
              </ul>
              <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString('ru-RU')} ₽</p>
            </div>
          </div>
          <div className="modal__buttons">
            <button
              onClick={() => handleButtonAddClick()}
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
            >
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Добавить в корзину
            </button>
          </div>
          <button
            onClick={changeStatusModal}
            className="cross-btn" type="button"
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
export default ModalAddTtem;
