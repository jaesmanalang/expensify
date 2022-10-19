import dayjs from 'dayjs';
import clsx from 'clsx';

const Transaction = ({ transaction }) => {
  const { title, amount, category, createdOn } = transaction;
  const formattedDate = dayjs(createdOn).format('MMM DD, YYYY');

  return (
    <div
      className={clsx(
        'rounded-md shadow-md p-4 border-l-4',
        category === 'Income' && 'border-l-green-300',
        category === 'Expense' && 'border-l-orange-300'
      )}
    >
      <div className="flex flex-col">
        <div className="text-sm font-bold">{title}</div>
        <div>&#8369;{amount}</div>
        <div>{formattedDate}</div>
      </div>
    </div>
  );
};

export default Transaction;
