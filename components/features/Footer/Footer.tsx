import { FooterWrapper } from "@/components/layouts/FooterWrapper/FooterWrapper";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className={styles["footer"]}>
        © 2025 TVS yumu31pj
      </div>
    </FooterWrapper>
  )
}