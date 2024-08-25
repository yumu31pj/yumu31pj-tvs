import Label from "../../../atoms/texts/Label/Label";
import { LabelType } from "../../../atoms/texts/Label/Label.types";
import styles from "./LabelList.module.scss";
import { LabelListType } from "./LabelList.types";

const LabelList = (props: LabelListType) => {
  const {listItems} = props;

  return (
    <ul className={styles['label-list']}>
      {listItems.map((item: LabelType, key: number) => (
        <li key={key}>
          <Label text={item.text} />
        </li>
      ))}
    </ul>
  )
}

export default LabelList;