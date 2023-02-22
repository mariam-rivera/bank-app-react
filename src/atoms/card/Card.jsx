import * as styles from './styles';

export const Card = ({ title, account, balance, cardImg }) => {
  return (
    <div className={`${styles.cardItem}`}>
      <div>
        <p>
          {title} <span> {account}</span>
        </p>
        <img src={cardImg} className={`${styles.cardImg}`} />
      </div>
      <div className={`${styles.total}`}>
        <p className={`${styles.totalBalance}`}>$ {balance}</p>
        <p>Balance</p>
      </div>
    </div>
  );
};
