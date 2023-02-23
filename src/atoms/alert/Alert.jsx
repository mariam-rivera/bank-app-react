import * as styles from './styles';

export const Alert = ({ message }) => {
  return (
    <div className={`${styles.alert}`}>
      <span>* {message} </span>
    </div>
  );
};
