import { useEffect, useState } from 'react';
import menuImg from '../../../assets/bank-images/menu.png';
import transferImg from '../../../assets/bank-images/transfer.png';
import opportunitiesImg from '../../../assets/bank-images/opportunities.png';
import withdrawImg from '../../../assets/bank-images/money-withdraw.png';
import moreImg from '../../../assets/bank-images/more.png';
import cardImg from '../../../assets/bank-images/card.png';
import { Task } from '../../../atoms/task/Task';
import { Menu } from '../../../atoms/menu/Menu';
import { Card } from '../../../atoms/card/Card';
import * as styles from './styles';
import { cardService } from '../../../services/cards/cards-service';
import { cardAdapter } from '../../../adapters/cards/cards-adapter';
import { Link } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../../constants/routes/routes-constants';

export const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const cards = await cardService();
      const cardsTransform = cardAdapter(cards);
      setCards(cardsTransform);
    };
    getData();
  }, []);

  const toggleMenu = () => {
    setIsToggle((state) => !state);
  };

  return (
    <div
      className={`${styles.dashboard} sm:h-screen sm:justify-between sm:py-10 sm:px-10`}>
      {/* top */}
      <div className={`${styles.menu}`}>
        <p className={`${styles.menuTitle} sm:text-lg`}>Hi, Mariam!</p>
        {isToggle ? <p className="md:hidden">test</p> : null}
        <div className="border-2 border-red-700 md:hidden" onClick={toggleMenu}>
          <img src={menuImg} className={`${styles.menuImg} sm:hidden`} />
        </div>
        <Menu />
      </div>
      {/* tasks */}
      <div className={`${styles.tasks} sm:h-[150px] sm:mt-8`}>
        <Task image={transferImg} title="Transfer" />
        <Task image={opportunitiesImg} title="Opportunities" />
        <Task image={withdrawImg} title="Withdraw" />
        <Task image={moreImg} title="More" />
      </div>
      {/* cards */}
      <div
        className={`${styles.cards} sm:w-full sm:flex-row sm:justify-around sm:items-center`}>
        <h3 className={`${styles.cardsTitle} sm:text-xl`}>Cards</h3>
        {/* card item */}
        {cards.map((card) => (
          <Link
            replace
            key={card.id}
            to={`/${PRIVATE_ROUTES.private}/${PRIVATE_ROUTES.cardDetail}/${card.id}`}>
            <Card
              cardImg={cardImg}
              title={card.title}
              balance={card.balance}
              account={card.account}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
