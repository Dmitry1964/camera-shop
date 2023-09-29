import { useState } from 'react';
import PaginationItem from '../pagination-item/pagination-item';
import { magicNumbers } from '../../../constants/const';

type PaginationListProps = {
  numberCards: number;
  cardsOnPage: number;
  handlePaginationItemClick: (evt : React.MouseEvent<HTMLAnchorElement>) => void;
}

const PaginationList = ({ numberCards, cardsOnPage, handlePaginationItemClick }: PaginationListProps): JSX.Element => {

  const numberPages = Math.ceil(numberCards / cardsOnPage);
  const numberPagesArr = [];
  for (let i = 1; i <= numberPages; i++) {
    numberPagesArr.push(i);
  }
  const [pagesCount, setPagesCount] = useState(numberPagesArr.slice(0, 3));

  return (
    <ul className="pagination__list">
      {numberPages > magicNumbers.paginationItemsOnPage && pagesCount[0] > 1 &&
        <li className="pagination__item"><a className="pagination__link pagination__link--text" href="2">Назад</a>
        </li>}
      {pagesCount.map((item, index) => (
        <PaginationItem
          handlePaginationItemClick={handlePaginationItemClick}
          item={item}
          index={index}
          key={item}
        />
      ))}
      {numberPages > magicNumbers.paginationItemsOnPage &&
        <li className="pagination__item"><a className="pagination__link pagination__link--text" href="2">Далее</a>
        </li>}
    </ul>

  );
};

export default PaginationList;
