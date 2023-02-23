import * as styles from './styles';

export const Transaction = ({ title, total, date }) => {
  return (
    <div className={`${styles.transactionItem}`}>
      <div>
        <p className="sm:text-lg sm:font-thin">{title}</p>
        <span className="sm:mt-2 sm:text-[10px] sm:font-normal">{date}</span>
      </div>
      <div>
        <p className="sm:text-2xl sm:font-thin">$ {total}</p>
      </div>
    </div>
  );
};
