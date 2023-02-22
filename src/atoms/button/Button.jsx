import * as styles from './styles';

export const Button = ({ onClick, title }) => {
  return (
    <button className={`${styles.button} sm:w-[350px]`} onClick={onClick}>
      {title}
    </button>
  );
};
