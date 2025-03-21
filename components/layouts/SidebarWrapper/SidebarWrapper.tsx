import styles from "./SidebarWrapper.module.scss";

export const SidebarWrapper = ( { children } : { children: React.ReactNode} ) => {
  return (
    <aside className={styles["sidebar-wrapper"]}>
      {children}
    </aside>
  )
}