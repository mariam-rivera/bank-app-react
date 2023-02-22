import * as styles from './styles';

export const Task = ({ image, title }) => {
  return (
    <div className={`${styles.itemTasks} sm:w-[250px] sm:h-[130px]`}>
      <img
        src={image}
        className={`${styles.itemImg} sm:w-[60px] sm:h-[60px]`}
      />
      <span className={`${styles.itemSpan} sm:text-[14px]`}>{title}</span>
    </div>
  );
};
