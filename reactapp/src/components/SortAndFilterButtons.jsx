export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons ">
      <button
        className="sortByTitleAsc btn btn-outline-secondary"
        onClick={() => {
          handleSort('ti');
        }}>
        sort id in Asc order
      </button>
      <button
        className="sortByTitleDesc btn btn-outline-secondary"
        onClick={() => {
          handleSort('tg');
        }}>
        {' '}
        sort id in Desc order
      </button>
      <button
        className="sortByTitleAsc btn btn-outline-secondary"
        onClick={() => {
          handleSort('ta');
        }}>
        sort city in Asc order
      </button>
      <button
        className="sortByTitleDesc btn btn-outline-secondary"
        onClick={() => {
          handleSort('td');
        }}>
        {' '}
        sort city in Desc order
      </button>
      <button
        className="sortByPriceAsc btn btn-outline-secondary"
        onClick={() => {
          handleSort('pa');
        }}>
        {' '}
        sort Population as order{' '}
      </button>
      <button
        className="sortByPriceDesc btn btn-outline-secondary"
        onClick={() => {
          handleSort('pd');
        }}>
        {' '}
        sort Population desc order{' '}
      </button>
    </div>
  );
};
