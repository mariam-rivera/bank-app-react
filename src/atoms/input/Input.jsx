import * as styles from './styles';

export const Input = ({ title, type, onChange }) => {
  return (
    <input
      type={type}
      className={`${styles.field} sm:w-[350px]`}
      placeholder={title}
      onChange={onChange}
    />
  );
};
