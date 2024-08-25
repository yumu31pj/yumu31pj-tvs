import { TitleType } from "@/_libs/types/Title.types";
import styles from "./SimpleTitleH4.module.scss";

const SimpleTitleH4 = (props: TitleType) => {
  const {title} = props;
  return (
    <h2 className={styles['simple-title--h4']}>{title}</h2>
  )
}

export default SimpleTitleH4;