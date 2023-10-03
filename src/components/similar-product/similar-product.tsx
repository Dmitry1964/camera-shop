import { ProductType } from '../../types/server-data-type';
import ProductCard from '../product-card/product-card';
import { useState } from 'react';

type SimilarProductProps = {
  data1: ProductType[];
}

const SimilarProduct = ({ data1 }: SimilarProductProps): JSX.Element => {
  const namberActiveCards = [0, 1, 2];
  const [activeCard, setActiveCard] = useState(namberActiveCards);

  const aaa = () => {
    setActiveCard(activeCard.map((item) => item + 1));
  };

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <div className="product-similar__slider-list">
            {data1.map((item, index) => (
              <ProductCard data={item} key={item.id} active={activeCard} index={index} />
            ))}
          </div>
          <button
            className="slider-controls slider-controls--prev"
            type="button" aria-label="Предыдущий слайд"
            disabled
          >
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
          <button
            onClick={aaa}
            className="slider-controls--next slider-controls"
            aria-label="Следующий слайд"
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
