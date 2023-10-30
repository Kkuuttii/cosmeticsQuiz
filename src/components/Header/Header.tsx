import styles from "./Header.module.scss";

interface HeaderProps {
  title: string;
  subTitle: string;
}

export const Header = ({ title, subTitle }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subTitle}>{subTitle}</h2>
    </div>
  );
};
