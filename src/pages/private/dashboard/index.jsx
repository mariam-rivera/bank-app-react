import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cardService } from '../../../services/cards/cards-service';
import { cardAdapter } from '../../../adapters/cards/cards-adapter';
import { PRIVATE_ROUTES } from '../../../constants/routes/routes-constants';
import { Task } from '../../../atoms/task/Task';
import { Menu } from '../../../atoms/menu/Menu';
import { Card } from '../../../atoms/card/Card';
import { SideBar } from '../../../atoms/sidebar/SideBar';
import menuImg from '../../../assets/bank-images/menu.png';
import transferImg from '../../../assets/bank-images/transfer.png';
import opportunitiesImg from '../../../assets/bank-images/opportunities.png';
import withdrawImg from '../../../assets/bank-images/money-withdraw.png';
import moreImg from '../../../assets/bank-images/more.png';
import cardImg from '../../../assets/bank-images/card.png';
import * as styles from './styles';

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
      className={`${styles.dashboard} md:h-screen md:justify-between md:py-10 md:px-10`}>
      {/* top */}
      <div className={`${styles.menu}`}>
        <p className={`${styles.menuTitle} md:text-lg`}>Hi, Mariam!</p>
        {isToggle ? <SideBar className="md:hidden" /> : null}
        <div className="md:hidden" onClick={toggleMenu}>
          <img src={menuImg} className={`${styles.menuImg} md:hidden`} />
        </div>
        <Menu />
      </div>
      {/* tasks */}
      <div className={`${styles.tasks} md:h-[150px] md:mt-8`}>
        <Task image={transferImg} title="Transfer" />
        <Task image={opportunitiesImg} title="Opportunities" />
        <Task image={withdrawImg} title="Withdraw" />
        <Task image={moreImg} title="More" />
      </div>
      {/* cards */}
      <div
        className={`${styles.cards} md:bg-blue-900 md:w-full md:flex-row md:justify-around md:items-center`}>
        <h3 className={`${styles.cardsTitle} md:text-xl`}>Cards</h3>
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
