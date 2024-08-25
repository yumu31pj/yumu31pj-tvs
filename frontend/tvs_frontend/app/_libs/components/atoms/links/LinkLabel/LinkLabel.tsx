import styles from "./LinkLabel.module.scss";
import { LinkLabelType } from "./LinkLabel.types";

const LinkLabel = (props: LinkLabelType) => {
  const {linkText, linkTo} = props;
  return (
    <a href={linkTo} className={styles['link-label']}>
      {linkText}
    </a>
  )
}

export default LinkLabel;