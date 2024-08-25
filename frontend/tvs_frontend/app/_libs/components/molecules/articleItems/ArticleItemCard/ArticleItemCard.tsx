import SimpleTitleH3 from "@/_libs/components/atoms/titles/SimpleTitle/SimpleTitleH3/SimpleTitleH3";
import LinkLabelList from "../../lists/LinkLabelList/LinkLabelList";
import styles from "./ArticleItemCard.module.scss";
import { ArticleItemCardType } from "./ArticleItemCard.types";

const ArticleItemCard = (props: ArticleItemCardType) => {
  const {title, linkTo, date, categories} = props;

  return (
    <div className={styles['article-item-card']}>
      <a href={linkTo} className={styles['article-item-card__title']}>
        <SimpleTitleH3 title={title} />
      </a>
      <span className={styles['article-item-card__date']}>{date}</span>
      {categories && 
        <LinkLabelList
          listItems={categories.listItems}
        />
      }
    </div>
  )
}

export default ArticleItemCard;