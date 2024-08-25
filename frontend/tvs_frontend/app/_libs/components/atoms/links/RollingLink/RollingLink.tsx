import { LinkItemType } from "@/_libs/types/LinkItem.types";
import styles from "./RollingLink.module.scss";

const RollingLink = (props: LinkItemType) => {
  const {linkText, linkTo} = props;

  return (
    <a href={linkTo} className={styles['rolling-link']}>
      <span className={styles['rolling-link__front']}>{linkText}</span>
      <span className={styles['rolling-link__back']}>{linkText}</span>
    </a>
  )
}

export default RollingLink;