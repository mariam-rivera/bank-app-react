import * as styles from './styles';
import { signOut, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
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
    <ul className={`${styles.menuItems} hidden sm:flex`}>
      <li className={styles.menuItem}>Profile</li>
      <li className={styles.menuItem}>Settings</li>
      <li className={styles.menuItem}>Promotions</li>
      <li className={styles.menuItem}>Clarifications</li>
      <li className={styles.menuItem}>About</li>
      <li className={styles.menuItem} onClick={handleLogoutSession}>
        Logout
      </li>
    </ul>
  );
};
