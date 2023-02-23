import * as styles from './styles';

export const Card = ({ id, title, account, balance, cardImg }) => {
  return (
    <div
      className={`${styles.cardItem} sm:w-[400px] sm:h-[200px] sm:px-10 sm:py-20`}>
      <div>
        <p className="sm:text-[13px]">
          {title} <span>* {account}</span>
        </p>
        <img
          src={cardImg}
          className={`${styles.cardImg} sm:w-[150px] sm:h-[150px]`}
        />
      </div>
      <div className={`${styles.total}`}>
        <p className={`${styles.totalBalance} sm:text-4xl`}>$ {balance}</p>
        <span
          className={`${styles.balanceSpan} sm:text-[14px] sm:mt-2 sm:font-light`}>
          Balance
        </span>
      </div>
    </div>
  );
};
