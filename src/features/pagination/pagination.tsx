import cn from 'classnames';
import { MouseEvent } from 'react';

type PaginationProps = {
  pageNumber: number;
  paginationItems: number[];
  changePage: (pN: number) => void;
  pageCount: number;
}


const Pagination = ({ pageNumber, paginationItems, changePage, pageCount }: PaginationProps) => {

  const handlerChangePageBtn = (evt: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    evt.preventDefault();
    const { target } = evt;
    const pageNum = (target as HTMLAnchorElement).textContent;
    if (pageNum) {
      changePage(parseInt(pageNum, 10) - 1);
    }
  };

  const handlerNextPageBtn = (evt : MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    evt.preventDefault();

  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item"><a className="pagination__link pagination__link--text visually-hidden" href="2">Назад</a>
        </li>
        {paginationItems && paginationItems.map((item, index) => (
          <li className="pagination__item" key={item}>
            <a onClick={(evt) => handlerChangePageBtn(evt)} className={cn('pagination__link', { 'pagination__link--active': pageNumber === index})} href="1">{item}</a>
          </li>
        ))}
        <li className="pagination__item"><a onClick={(evt) => handlerNextPageBtn(evt)} className="pagination__link pagination__link--text" href="2">Далее</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
