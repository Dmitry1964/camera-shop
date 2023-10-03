import { useState } from 'react';
import cn from 'classnames';
import { ProductType } from '../../types/server-data-type';

type TabsProps = {
  data: ProductType;
}

const Tabs = ({data} : TabsProps): JSX.Element => {

  const [spec, setSpec] = useState(true);
  const [desc, setDesc] = useState(false);
  const handleTabButtonClick = () => {
    setSpec(!spec);
    setDesc(!desc);
  };
  const {vendorCode, category, type, level, description} = data;
  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button
          onClick={handleTabButtonClick}
          className={cn('tabs__control', { 'is-active': spec })}
          type="button"
        >Характеристики
        </button>
        <button
          onClick={handleTabButtonClick}
          className={cn('tabs__control', { 'is-active': desc })}
          type="button"
        >Описание
        </button>
      </div>
      <div className="tabs__content">
        <div className={cn('tabs__element', {'is-active': spec})}>
          <ul className="product__tabs-list">
            <li className="item-list"><span className="item-list__title">Артикул:</span>
              <p className="item-list__text">{vendorCode}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Категория:</span>
              <p className="item-list__text">{category}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{type}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{level}</p>
            </li>
          </ul>
        </div>
        <div className={cn('tabs__element', {'is-active': desc})}>
          <div className="product__tabs-text">{description}</div>
        </div>
      </div>
    </div>

  );
};

export default Tabs;
