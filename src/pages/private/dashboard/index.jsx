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

export const Dashboard = () => {
  return (
    <div className={`${styles.dashboard} sm:justify-between sm:py-8 sm:px-10`}>
      {/* top */}
      <div className={`${styles.menu}`}>
        <p className={`${styles.menuTitle} sm:text-lg`}>Hi, Mariam!</p>
        <img src={menuImg} className={`${styles.menuImg} sm:hidden`} />
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
      <div className={`${styles.cards} sm:w-1/3 sm:ml-10`}>
        <h3 className={`${styles.cardsTitle}`}>Cards</h3>
        {/* card item */}
        <Card
          title="Debit card"
          account="*2408"
          balance={125000}
          cardImg={cardImg}
        />
        <Card
          title="Credit card"
          account="*9008"
          balance={9000}
          cardImg={cardImg}
        />
      </div>
    </div>
  );
};
