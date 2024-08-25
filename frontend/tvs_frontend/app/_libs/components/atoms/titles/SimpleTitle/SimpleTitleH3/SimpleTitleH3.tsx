import { TitleType } from "@/_libs/types/Title.types";
import styles from "./SimpleTitleH3.module.scss";

const SimpleTitleH3 = (props: TitleType) => {
  const {title} = props;
  return (
    <h3 className={styles['simple-title--h3']}>{title}</h3>
  )
}

export default SimpleTitleH3;