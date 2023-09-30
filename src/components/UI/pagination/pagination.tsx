import { MouseEvent, useState } from 'react';
import { totalPages } from '../../../utils/utils';
import cn from 'classnames';
import { Link } from 'react-router-dom';


type PaginationProps = {
  totalCards: number;
  limit: number;
}

const Pagination = ({ totalCards, limit }: PaginationProps): JSX.Element => {
  const itemsPagination = totalPages(totalCards, limit);

  const [page, setPage] = useState(1);

  const handlePaginationItemClick = (evt: MouseEvent<HTMLAnchorElement>, item: number) => {
    evt.preventDefault();
    setPage(item);
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item"><a className="pagination__link pagination__link--text" href="2">Назад</a>
        </li>

        {itemsPagination.map((item) => (
          <li className="pagination__item" key={item}>
            <Link
              onClick={(evt) => handlePaginationItemClick(evt, item)}
              className={cn('pagination__link', { 'pagination__link--active': item === page })}
              to={`${item}`}
            >
              {item}
            </Link>
          </li>
        ))}
        <li className="pagination__item"><a className="pagination__link pagination__link--text" href="2">Далее</a>
        </li>
      </ul>
    </div>

  );
};

export default Pagination;
