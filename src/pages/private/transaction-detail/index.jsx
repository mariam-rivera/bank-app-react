import { Button } from '../../../atoms/button/Button';
import { PRIVATE_ROUTES } from '../../../constants/routes/routes-constants';
import unknownImg from '../../../assets/bank-images/unknown.png';
import shareImg from '../../../assets/bank-images/share.png';
// import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as styles from './styles';

export const TransactionDetail = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/${PRIVATE_ROUTES.private}`, { replace: true });
  };

  return (
    <div className={`${styles.transaction} sm:py-10 sm:px-20`}>
      <div className={`${styles.topInfo}`}>
        <p className={`${styles.description}`}>Some stuff</p>
        <span className={`${styles.total}`}>$ 112900</span>
        <p className={`${styles.description}`}>23/02/2023</p>
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
        <p>all description here</p>
      </div>
      <Button onClick={handleBack} title="Back home" />
    </div>
  );
};
