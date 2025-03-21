import styles from "./HeaderWrapper.module.scss";

export const HeaderWrapper = ({ children } : { children: React.ReactNode } ) => {
  return (
    <header className={styles['header-wrapper']}>
      {children}
    </header>
  )
}