import ArticleCardWithThumbnail from "@/_libs/components/molecules/articleItems/ArticleCardWithThumbnail/ArticleCardWithThumbnail";
import { ArticleCardWithThumbnailType } from "@/_libs/components/molecules/articleItems/ArticleCardWithThumbnail/ArticleCardWithThumbnail.types";
import styles from "./ArticleCardsWithThumbnail.module.scss";
import { ArticleCardsWithThumbnailType } from "./ArticleCardsWithThumbnail.types";

const ArticleCardsWithThumbnail = (props: ArticleCardsWithThumbnailType) => {
  const {articles} = props;

  return (
    <ul className={styles['article-cards-with-thumbnail']}>
      {articles.map((article: ArticleCardWithThumbnailType, key: number) => (
        <li key={key} className={styles['article-cards-with-thumbnail__item']}>
          <ArticleCardWithThumbnail
            imageItem={article.imageItem}
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

export default ArticleCardsWithThumbnail;