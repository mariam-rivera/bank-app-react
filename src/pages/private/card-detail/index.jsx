// import { useParams } from 'react-router-dom';
import { Card } from '../../../atoms/card/Card';
import { Button } from '../../../atoms/button/Button';
import { Transaction } from '../../../atoms/transaction/Transaction';

import cardImg from '../../../assets/bank-images/card.png';

import * as styles from './styles';

export const CardDetail = () => {
  // const params = useParams();
  // console.log(params);
  return (
    <div className={`${styles.dashboard} sm:justify-between sm:py-8 sm:px-10`}>
      {/* card */}
      <div className={`${styles.primaryCard}`}>
        <Card
          title="Debit card"
          account="2408"
          cardImg={cardImg}
          balance={125000}
        />
      </div>
      {/* transactions */}
      <div className={`${styles.transactions}`}>
        <h3 className={styles.transactionsTitle}>Last transactions</h3>
        {/* item */}
        <Transaction title="Uber Eats" total={280} />
        <Transaction title="Petco" total={980} />
        <Transaction title="Cheesecake Factory" total={1280} />
        <Transaction title="Didi Food" total={238} />
        <Transaction title="Coach" total={11880} />
        <span className={`${styles.seeMore}`}>See more</span>
        {/* end here */}
      </div>
      <div className={`${styles.backHome}`}>
        <Button title="Back home" />
      </div>
    </div>
  );
};
