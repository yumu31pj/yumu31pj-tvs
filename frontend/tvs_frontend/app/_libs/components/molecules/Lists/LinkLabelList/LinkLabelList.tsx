import LinkLabel from "@/_libs/components/atoms/links/LinkLabel/LinkLabel";
import { LinkLabelType } from "@/_libs/components/atoms/links/LinkLabel/LinkLabel.types";
import styles from "./LinkLabelList.module.scss";
import { LinkLabelListType } from "./LinkLabelList.types";

const LinkLabelList = (props: LinkLabelListType) => {
  const {listItems} = props;

  return (
    <ul className={styles['link-label-list']}>
      {listItems.map((item: LinkLabelType, key: number) => (
        <li key={key}>
          <LinkLabel 
            linkText={item.linkText} 
            linkTo={item.linkTo}
          />
        </li>
      ))}
    </ul>
  )
}

export default LinkLabelList;