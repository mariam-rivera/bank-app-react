import * as styles from './styles';

export const Button = ({ onClick, title }) => {
  return (
    <button className={`${styles.button} md:w-[350px]`} onClick={onClick}>
      {title}
    </button>
  );
};
