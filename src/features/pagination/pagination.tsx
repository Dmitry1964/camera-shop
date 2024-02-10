import cn from 'classnames';
import { MouseEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

type PaginationProps = {
  pageNumber: number;
  paginationItems: number[];
  changePage: (pN: number) => void;
}

const Pagination = ({ pageNumber, paginationItems, changePage}: PaginationProps) => {

  const [, setSearchParams] = useSearchParams({page: '1'});

  const handlerChangePageBtn = (evt: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    evt.preventDefault();
    const { target } = evt;
    const pageNum = (target as HTMLAnchorElement).textContent;
    if (pageNum) {
      changePage(parseInt(pageNum, 10) - 1);
      setSearchParams({page: pageNum});
    }
  };

  const handlerNextPageBtn = (evt : MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    evt.preventDefault();

  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item visually-hidden"><a className="pagination__link pagination__link--text" href="2">Назад</a>
        </li>
        {paginationItems && paginationItems.map((item, index) => (
          <li className="pagination__item" key={item}>
            <Link onClick={(evt) => handlerChangePageBtn(evt)} className={cn('pagination__link', { 'pagination__link--active': pageNumber === index})} to='1'>{item}</Link>
          </li>
        ))}
        <li className="pagination__item visually-hidden"><a onClick={(evt) => handlerNextPageBtn(evt)} className="pagination__link pagination__link--text" href="2">Далее</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
