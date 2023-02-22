import * as styles from './styles';

export const Button = ({ handleInitSession, title }) => {
  return (
    <button
      className={`${styles.button} sm:w-[350px]`}
      onClick={handleInitSession}>
      {title}
    </button>
  );
};
