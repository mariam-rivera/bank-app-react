import * as styles from './styles';

export const Menu = () => {
  return (
    <ul className={`${styles.menuItems} hidden sm:flex`}>
      <li className={styles.menuItem}>Profile</li>
      <li className={styles.menuItem}>Settings</li>
      <li className={styles.menuItem}>Promotions</li>
      <li className={styles.menuItem}>Clarifications</li>
      <li className={styles.menuItem}>About</li>
      <li className={styles.menuItem}>Logout</li>
    </ul>
  );
};
