import cn from 'classnames';

type PaginationItemProps = {
  item: number;
  index: number;
  handlePaginationItemClick: (evt: React.MouseEvent<HTMLAnchorElement>) => void;
}

const PaginationItem = ({ item, index, handlePaginationItemClick }: PaginationItemProps): JSX.Element => (
  <li className="pagination__item">
    <a
      onClick={(evt: React.MouseEvent<HTMLAnchorElement>) => handlePaginationItemClick(evt)}
      className={cn('pagination__link', { 'pagination__link--active': index === 0 })}
      href={`${item}`}
      data-id={item}
    >
      {item}
    </a>
  </li>
);

export default PaginationItem;
