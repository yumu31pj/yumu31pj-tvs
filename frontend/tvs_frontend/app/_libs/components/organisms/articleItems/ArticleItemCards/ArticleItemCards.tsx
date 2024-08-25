import ArticleItemCard from "../../../molecules/articleItems/ArticleItemCard/ArticleItemCard";
import { ArticleItemCardType } from "../../../molecules/articleItems/ArticleItemCard/ArticleItemCard.types";
import styles from "./ArticleItemCards.module.scss";
import { ArticleItemCardsType } from "./ArticleItemCards.types";

const ArticleItemCards = (props: ArticleItemCardsType) => {
  const {articles} = props;

  return (
    <ul className={styles['article-item-cards']}>
      {articles.map((article: ArticleItemCardType, key: number) => (
        <li key={key}  className={styles['article-item-cards__item']}>
          <ArticleItemCard
            title={article.title}
            linkTo={article.linkTo}
            date={article.date}
            categories={article.categories}
          />
        </li>
      ))}
    </ul>
  )
}

export default ArticleItemCards;