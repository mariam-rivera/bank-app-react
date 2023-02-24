import * as styles from './styles';

export const Transaction = ({ title, total, date }) => {
  return (
    <div className={`${styles.transactionItem}`}>
      <div>
        <p className="md:text-lg md:font-thin">{title}</p>
        <span className="md:mt-2 md:text-[10px] md:font-normal">{date}</span>
      </div>
      <div>
        <p className="md:text-2xl md:font-thin">- $ {total}</p>
      </div>
    </div>
  );
};
