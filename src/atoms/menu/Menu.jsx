import * as styles from './styles';
import { signOut, getAuth } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import {
  PUBLIC_ROUTES,
  PRIVATE_ROUTES,
} from '../../constants/routes/routes-constants';
import { clearSessionStorage } from '../../utils/session-storage/session-storage';

export const Menu = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogoutSession = () => {
    signOut(auth)
      .then(() => {
        clearSessionStorage();
        navigate(`/${PUBLIC_ROUTES.login}`, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ul className={`${styles.menuItems} hidden md:flex`}>
      <li className={styles.menuItem}>Profile</li>
      <li className={styles.menuItem}>Settings</li>
      <Link to={`/${PRIVATE_ROUTES.private}/${PRIVATE_ROUTES.promotions}`}>
        <li className={styles.menuItem}>Promotions</li>
      </Link>
      <li className={styles.menuItem}>Clarifications</li>
      <Link to={`/${PRIVATE_ROUTES.private}/${PRIVATE_ROUTES.about}`}>
        <li className={styles.menuItem}>About</li>
      </Link>
      <li className={styles.menuItem} onClick={handleLogoutSession}>
        Logout
      </li>
    </ul>
  );
};
