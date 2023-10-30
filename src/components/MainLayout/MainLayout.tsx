import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

export const MainLayout = (): JSX.Element => {
  return (
    <div className={styles.mainLayout}>
      <Outlet />
    </div>
  );
};
