import styles from "./Sidebar.module.scss";

import { SidebarWrapper } from "@/components/layouts/SidebarWrapper/SidebarWrapper";

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div className={styles["sidebar"]}>
        Menu
      </div>
    </SidebarWrapper>
  )
}