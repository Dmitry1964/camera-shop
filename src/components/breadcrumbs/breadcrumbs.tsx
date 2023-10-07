import { PageRoute } from '../../constants/const';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { useAppSelector } from '../../hooks/hooks';
import { Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import cn from 'classnames';

type RoutesType = {
  path: string;
  breadcrumb: string;
}

const Breadcrumbs = (): JSX.Element => {
  const { name } = useAppSelector((state) => state.productCard);
  const { camerasId } = useParams();
  const location = useLocation();
  const routes: RoutesType[] = [
    { path: PageRoute.Catalog, breadcrumb: 'Каталог' },
    { path: `${PageRoute.Product}`, breadcrumb: ' ' },
    { path: `${PageRoute.Product}/${camerasId}`, breadcrumb: `${name}` },
  ];

  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item ">
            <a className="breadcrumbs__link" href="index.html">Главная
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </a>
          </li>
          {breadcrumbs.map(({ match, breadcrumb }) => (
            <li className={cn('breadcrumbs__item', { 'visually-hidden': match.route?.breadcrumb === ' ' })} key={match.pathname}>
              <Link
                className={cn('breadcrumbs__link', { 'breadcrumbs__link--active': match.pathname === location.pathname })}
                to={match.pathname}
              >
                {breadcrumb}
                {match.pathname !== location.pathname &&
                  < svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini"></use>
                  </svg>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
};

export default Breadcrumbs;
