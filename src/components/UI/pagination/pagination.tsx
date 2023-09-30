import { MouseEvent, useState } from 'react';
import { totalPages } from '../../../utils/utils';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { magicNumbers, PaginationButtons } from '../../../constants/const';


type PaginationProps = {
  totalCards: number;
  limit: number;
}

const Pagination = ({ totalCards, limit }: PaginationProps): JSX.Element => {

  const [page, setPage] = useState(magicNumbers.firstPage);
  const [pageCurrent, setPageCurrent] = useState({ start: 0, end: 3 });

  const itemsPagination = totalPages(totalCards, limit).slice(pageCurrent.start, pageCurrent.end);

  const handlePaginationItemClick = (evt: MouseEvent<HTMLAnchorElement>, item: number) => {
    evt.preventDefault();
    setPage(item);
  };
  const handlerButtonClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const buttonName = evt.target.textContent;
    if (buttonName === PaginationButtons.Next) {
      setPageCurrent({ ...pageCurrent, start: pageCurrent.start + magicNumbers.paginationItemsOnPage, end: pageCurrent.end + magicNumbers.paginationItemsOnPage });
    } else {
      setPageCurrent({ ...pageCurrent, start: pageCurrent.start - magicNumbers.paginationItemsOnPage, end: pageCurrent.end - magicNumbers.paginationItemsOnPage });
    }
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {pageCurrent.start !== 0 &&
          <li className="pagination__item">
            <Link
              onClick={(evt) => handlerButtonClick(evt)}
              className="pagination__link pagination__link--text"
              to="2"
              data-info='prev'
            >
              {PaginationButtons.Prev}
            </Link>
          </li>}
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
        {(totalPages(totalCards, limit).length > pageCurrent.end) &&
          <li className="pagination__item">
            <Link
              onClick={(evt) => handlerButtonClick(evt)}
              className="pagination__link pagination__link--text"
              to="2"
              data-info='next'
            >
              {PaginationButtons.Next}
            </Link>
          </li>}
      </ul>
    </div>
  );
};

export default Pagination;
