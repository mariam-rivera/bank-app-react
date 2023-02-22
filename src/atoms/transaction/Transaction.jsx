import * as styles from './styles';

export const Transaction = ({ title, total }) => {
  return (
    <div className={`${styles.transactionItem}`}>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>$ {total}</p>
      </div>
    </div>
  );
};
