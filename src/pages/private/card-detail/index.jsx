import { Card } from '../../../atoms/card/Card';
import { Button } from '../../../atoms/button/Button';
import { Transaction } from '../../../atoms/transaction/Transaction';
import { PRIVATE_ROUTES } from '../../../constants/routes/routes-constants';
import cardImg from '../../../assets/bank-images/card.png';
import { useState, useEffect } from 'react';
import * as styles from './styles';
import { cardService } from '../../../services/cards/cards-service';
import { cardAdapter } from '../../../adapters/cards/cards-adapter';
import { useParams, useNavigate, Link } from 'react-router-dom';

export const CardDetail = () => {
  const [cards, setCards] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

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

  const handleBack = () => {
    navigate(`/${PRIVATE_ROUTES.private}`, { replace: true });
  };

  return (
    <div
      className={`${styles.dashboard} sm:flex-row sm:h-screen sm:justify-around sm:items-center`}>
      {/* card */}
      <div
        className={`${styles.primaryCard} sm:w-1/3 sm:h-1/2 sm:items-center sm:justify-center`}>
        <Card
          title={cards[0]?.title}
          account={cards[0]?.account}
          cardImg={cardImg}
          balance={cards[0]?.balance}
        />
      </div>
      {/* transactions */}
      <div
        className={`${styles.transactions} sm:mt-0 sm:w-1/3 sm:justify-between`}>
        <h3 className={styles.transactionsTitle}>Last transactions</h3>
        {/* item */}
        {cards[0]?.transactions.map(({ name, date, total }, index) => (
          <Link
            replace
            key={index}
            to={`/${PRIVATE_ROUTES.private}/${PRIVATE_ROUTES.transactionDetail}/{index}`}>
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
