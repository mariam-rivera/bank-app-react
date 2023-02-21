import menuImg from '../../../assets/bank-images/menu.png';
import transferImg from '../../../assets/bank-images/transfer.png';
import opportunitiesImg from '../../../assets/bank-images/opportunities.png';
import withdrawImg from '../../../assets/bank-images/money-withdraw.png';
import moreImg from '../../../assets/bank-images/more.png';
import cardImg from '../../../assets/bank-images/card.png';

import * as styles from './styles';

export const Dashboard = () => {
  return (
    <div className={`${styles.dashboard} sm:justify-around sm:py-5 sm:px-10`}>
      {/* top */}
      <div className={`${styles.menu}`}>
        <p className={`${styles.menuTitle} sm:text-lg`}>Hi, Mariam!</p>
        <img src={menuImg} className={`${styles.menuImg} sm:hidden`} />
        <ul className={`${styles.menuItems} hidden sm:flex`}>
          <li className={styles.menuItem}>Profile</li>
          <li className={styles.menuItem}>Settings</li>
          <li className={styles.menuItem}>Promotions</li>
          <li className={styles.menuItem}>Clarifications</li>
          <li className={styles.menuItem}>About</li>
          <li className={styles.menuItem}>Logout</li>
        </ul>
      </div>
      {/* tasks */}
      <div className={`${styles.tasks} sm:h-[250px] sm:mt-8 sm:justify-around`}>
        <div className={`${styles.itemTasks} sm:w-[250px] sm:h-[130px]`}>
          <img
            src={transferImg}
            className={`${styles.itemImg} sm:w-[60px] sm:h-[60px]`}
          />
          <span className={`${styles.itemSpan} sm:text-[14px]`}>Transfer</span>
        </div>
        <div className={`${styles.itemTasks} sm:w-[250px] sm:h-[130px]`}>
          <img
            src={opportunitiesImg}
            className={`${styles.itemImg} sm:w-[60px] sm:h-[60px]`}
          />
          <span className={`${styles.itemSpan} sm:text-[14px]`}>
            Opportunities
          </span>
        </div>
        <div className={`${styles.itemTasks} sm:w-[250px] sm:h-[130px]`}>
          <img
            src={withdrawImg}
            className={`${styles.itemImg} sm:w-[60px] sm:h-[60px]`}
          />
          <span className={`${styles.itemSpan} sm:text-[14px]`}>Withdraw</span>
        </div>
        <div className={`${styles.itemTasks} sm:w-[250px] sm:h-[130px]`}>
          <img
            src={moreImg}
            className={`${styles.itemImg} sm:w-[60px] sm:h-[60px]`}
          />
          <span className={`${styles.itemSpan} sm:text-[14px]`}>More</span>
        </div>
      </div>
      {/* primary card */}
      <div className={`${styles.primaryCard}`}>
        <div>
          <p>Total</p>
          <p>Account *2408</p>
        </div>
        <div className={`${styles.total}`}>
          <p className={`${styles.totalBalance}`}>$125,000</p>
          <p>Balance</p>
        </div>
      </div>
      {/* cards */}
      <div className={`${styles.cards}`}>
        <h3 className={`${styles.cardsTitle}`}>Cards</h3>
        {/* card item */}
        <div className={`${styles.cardItem}`}>
          <div>
            <p>
              Debit card <span> *2408</span>
            </p>
            <img src={cardImg} className={`${styles.cardImg}`} />
          </div>
          <div className={`${styles.total}`}>
            <p className={`${styles.totalBalance}`}>$125,000</p>
            <p>Balance</p>
          </div>
        </div>
        {/* card item */}
        <div className={`${styles.cardItem}`}>
          <div>
            <p>
              Credit card <span> *2409</span>
            </p>
            <img src={cardImg} className={`${styles.cardImg}`} />
          </div>
          <div className={`${styles.total}`}>
            <p className={`${styles.totalBalance}`}>$12,680</p>
            <p>Used balance</p>
            <p>$3, 320</p>
            <p>Balance</p>
          </div>
        </div>
      </div>
    </div>
  );
};
