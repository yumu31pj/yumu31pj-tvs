import { TitleType } from "@/_libs/types/Title.types";
import styles from "./SimpleTitleH2.module.scss";

const SimpleTitleH2 = (props: TitleType) => {
  const {title} = props;
  return (
    <h2 className={styles['simple-title--h2']}>{title}</h2>
  )
}

export default SimpleTitleH2;