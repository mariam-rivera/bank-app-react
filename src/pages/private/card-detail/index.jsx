import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { cardService } from '../../../services/cards/cards-service';
import { cardAdapter } from '../../../adapters/cards/cards-adapter';
import { PRIVATE_ROUTES } from '../../../constants/routes/routes-constants';
import { Card } from '../../../atoms/card/Card';
import { Button } from '../../../atoms/button/Button';
import { Transaction } from '../../../atoms/transaction/Transaction';
import cardImg from '../../../assets/bank-images/card.png';
import * as styles from './styles';

import {
  useTransactionStore,
  setGlobalTransaction,
} from '../../../stores/transaction-store';

export const CardDetail = () => {
  const [cards, setCards] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const setTransaction = useTransactionStore(setGlobalTransaction);

  useEffect(() => {
    const getData = async () => {
      const cards = await cardService();
      const cardsTransform = cardAdapter(cards);
      const cardSelected = cardsTransform.filter(
        (card) => card.id === params.slug
      );
      setCards(cardSelected);
    };
    getData();
  }, []);

  useEffect(() => {
    setTransaction(cards[0]?.transactions);
  }, [cards[0]?.account]);

  const handleBack = () => {
    navigate(`/${PRIVATE_ROUTES.private}`, { replace: true });
  };

  return (
    <div
      className={`${styles.dashboard} md:flex-row md:h-screen md:justify-around md:items-center`}>
      {/* card */}
      <div
        className={`${styles.primaryCard} md:w-1/3 md:h-1/2 md:items-center md:justify-center`}>
        <Card
          title={cards[0]?.title}
          account={cards[0]?.account}
          cardImg={cardImg}
          balance={cards[0]?.balance}
        />
      </div>
      {/* transactions */}
      <div
        className={`${styles.transactions} md:mt-0 md:w-1/3 md:justify-between`}>
        <h3 className={styles.transactionsTitle}>Last transactions</h3>
        {/* item */}
        {cards &&
          cards[0]?.transactions.map(({ name, date, total }, index) => (
            <Link
              replace
              key={index}
              to={`/${PRIVATE_ROUTES.private}/${PRIVATE_ROUTES.transactionDetail}/${name}`}>
              <Transaction date={date} title={name} total={total} />
            </Link>
          ))}
        <span className={styles.seeMore}>See more</span>
      </div>
      <div className={`${styles.backHome}`}>
        <Button onClick={handleBack} title="Back home" />
      </div>
    </div>
  );
};
