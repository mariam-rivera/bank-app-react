import * as styles from './styles';

export const Task = ({ image, title }) => {
  return (
    <div
      className={`${styles.itemTasks} md:bg-slate-800 md:w-[250px] md:h-[130px]`}>
      <img
        src={image}
        className={`${styles.itemImg} md:w-[60px] md:h-[60px]`}
      />
      <span className={`${styles.itemSpan} md:text-[14px]`}>{title}</span>
    </div>
  );
};
