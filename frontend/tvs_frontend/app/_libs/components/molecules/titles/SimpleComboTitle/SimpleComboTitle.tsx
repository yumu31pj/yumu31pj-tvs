import { SimpleComboTitleType } from "./SimpleComboTitle.types";

import styles from "./SimpleComboTitle.module.scss";

const SimpleComboTitle = (props: SimpleComboTitleType) => {
  const {titleJP, titleEN} = props;

  return (
    <div className={styles['simple-combo-title']}>
      <div className={styles['simple-combo-title__sub']}>{titleEN}</div>
      <h2 className={styles['simple-combo-title__main']}>
        {titleJP}
      </h2>
    </div>
  )
}

export default SimpleComboTitle;