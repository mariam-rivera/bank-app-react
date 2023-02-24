import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  useTransactionStore,
  getGlobalTransaction,
} from '../../../stores/transaction-store';
import { PRIVATE_ROUTES } from '../../../constants/routes/routes-constants';
import { Button } from '../../../atoms/button/Button';
import unknownImg from '../../../assets/bank-images/unknown.png';
import shareImg from '../../../assets/bank-images/share.png';
import * as styles from './styles';

export const TransactionDetail = () => {
  const [transaction, setTransaction] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const transactions = useTransactionStore(getGlobalTransaction);

  useEffect(() => {
    if (transactions.length === 0) {
      navigate(`/${PRIVATE_ROUTES.private}`, { replace: true });
    }
    const transactionSelected = transactions?.filter(
      (transaction) => transaction.name === params.slug
    );
    setTransaction(transactionSelected);
  }, []);

  const handleBack = () => {
    navigate(`/${PRIVATE_ROUTES.private}`, { replace: true });
  };

  return (
    <div className={`${styles.transaction} md:py-10 md:px-20`}>
      <div className={`${styles.topInfo}`}>
        <p className={`${styles.description}`}>{transaction[0]?.name}</p>
        <span className={`${styles.total}`}>- $ {transaction[0]?.total} </span>
        <p className={`${styles.description}`}>{transaction[0]?.date}</p>
      </div>
      <div className={styles.actions}>
        <div className={`${styles.imgContainer}`}>
          <img className={`${styles.img}`} src={unknownImg} />
          <span className={`${styles.imgSpan}`}>Unknown</span>
        </div>
        <div className={`${styles.imgContainer}`}>
          <img className={`${styles.img}`} src={shareImg} />
          <span className={`${styles.imgSpan}`}>Share</span>
        </div>
      </div>
      <div className={`${styles.details}`}>
        <span className={`${styles.detailsSpan}`}>Description</span>
        <p className={`${styles.description}`}>{transaction[0]?.name}</p>
        <span className={`${styles.detailsSpan}`}>Transaction date</span>
        <p className={`${styles.description}`}>{transaction[0]?.date}</p>
        <span className={`${styles.detailsSpan}`}>Total</span>
        <p className={`${styles.description}`}>{transaction[0]?.total}</p>
      </div>
      <Button onClick={handleBack} title="Back home" />
    </div>
  );
};
