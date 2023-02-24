import * as styles from './styles';

export const Card = ({ id, title, account, balance, cardImg }) => {
  return (
    <div
      className={`${styles.cardItem} md:w-[400px] md:h-[200px] md:px-10 md:py-20`}>
      <div>
        <p className="md:text-[13px]">
          {title} <span>* {account}</span>
        </p>
        <img
          src={cardImg}
          className={`${styles.cardImg} md:w-[150px] md:h-[150px]`}
        />
      </div>
      <div className={`${styles.total}`}>
        <p className={`${styles.totalBalance} md:text-4xl`}>$ {balance}</p>
        <span
          className={`${styles.balanceSpan} md:text-[14px] md:mt-2 md:font-light`}>
          Balance
        </span>
      </div>
    </div>
  );
};
