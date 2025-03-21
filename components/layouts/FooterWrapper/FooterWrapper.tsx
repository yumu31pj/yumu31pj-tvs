import styles from "./FooterWrapper.module.scss";

export const FooterWrapper = ({ children }: {children: React.ReactNode}) => {
  return (
    <footer className={styles['footer-wrapper']}>
      {children}
    </footer>
  )
}