import { useState } from 'react';
import cn from 'classnames';
import { ProductType } from '../../types/server-data-type';
import { Link } from 'react-router-dom';
import { TabsButton } from '../../constants/const';

type TabsProps = {
  data: ProductType;
}

const Tabs = ({data} : TabsProps): JSX.Element => {

  const [param, setParam] = useState(TabsButton.Spec);
  const {vendorCode, category, type, level, description, id} = data;
  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <Link to ={`${id}/spec`}
          onClick={() => setParam(TabsButton.Spec)}
          className={cn('tabs__control', { 'is-active': param === TabsButton.Spec })}
          type="button"
        >Характеристики
        </Link>
        <Link to ={`${id}/desc`}
          onClick={() => setParam(TabsButton.Desc)}
          className={cn('tabs__control', { 'is-active': param === TabsButton.Desc })}
          type="button"
        >Описание
        </Link>
      </div>
      <div className="tabs__content">
        <div className={cn('tabs__element', {'is-active': param === TabsButton.Spec})}>
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
        <div className={cn('tabs__element', {'is-active': param === TabsButton.Desc})}>
          <div className="product__tabs-text">{description}</div>
        </div>
      </div>
    </div>

  );
};

export default Tabs;
