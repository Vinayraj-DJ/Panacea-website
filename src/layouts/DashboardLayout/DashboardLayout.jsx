import styles from "./DashboardLayout.module.css";
import TopBar from "../../sections/TopBar/TopBar"; // Option A TopBar
import { Outlet } from "react-router";
import WhatsAppFloatingButton from "../WhatsAppFloatingButton/WhatsAppFloatingButton";

function DashboardLayout() {
  return (
    <div className={styles.DashboardLayout}>
      <div className={styles.LeftSection} />
      <div className={styles.RightSection}>
        <TopBar />
        {/* window will be used for scrolling in Option A */}
        <main className={styles.Main}>
          <Outlet />
          <WhatsAppFloatingButton />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
