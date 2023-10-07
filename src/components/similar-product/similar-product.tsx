import { ProductType } from '../../types/server-data-type';
import ProductCard from '../product-card/product-card';
import { useState } from 'react';

type SimilarProductProps = {
  similarList: ProductType[];
}

const SimilarProduct = ({ similarList }: SimilarProductProps): JSX.Element => {
  const namberActiveCards = [0, 1, 2];
  const [activeCards, setActiveCards] = useState(namberActiveCards);

  const handleButtonNextClick = () => {
    setActiveCards(activeCards.map((item) => item + 1));
  };

  const handleButtonPrevClick = () => {
    setActiveCards(activeCards.map((item) => item - 1));
  };

  const lengthList = similarList.length;

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <div className="product-similar__slider-list">
            {similarList.map((item, index) => (
              <ProductCard data={item} key={item.id} active={activeCards} index={index} />
            ))}
          </div>
          <button
            onClick = {handleButtonPrevClick}
            className="slider-control slider-controls--prev"
            type="button" aria-label="Предыдущий слайд"
            disabled = {activeCards.includes(0)}
          >
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
          <button
            onClick={handleButtonNextClick}
            className="slider-controls--next slider-control"
            aria-label="Следующий слайд"
            disabled = {activeCards.includes(lengthList - 1)}
          >
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
    </section>

  );
};

export default SimilarProduct;
