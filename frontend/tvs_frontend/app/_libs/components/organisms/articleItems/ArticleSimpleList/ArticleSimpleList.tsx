import ArticleSimpleItem from "@/_libs/components/molecules/articleItems/ArticleSimpleItem/ArticleSimpleItem";
import { ArticleSimpleItemType } from "@/_libs/components/molecules/articleItems/ArticleSimpleItem/ArticleSimpleItem.types";
import { getFormatedDateString } from "@/_libs/utils/getFormatedDateString";
import styles from "./ArticleSimpleList.module.scss";
import { ArticleSimpleListType } from "./ArticleSimpleList.types";

const ArticleSimpleList = (props: ArticleSimpleListType) => {
  const {articles} = props;
  
  return (
    <>
      {articles && 
        <ul className={styles["articles"]}>
          {articles.map((article: ArticleSimpleItemType, key: number) => (
            <li className={styles["articles__item"]} key={key}>
              <ArticleSimpleItem
                title={article.title}
                linkTo={article.linkTo}
                date={getFormatedDateString(article.date)}
              />
            </li>
          ))}
        </ul>
      }
    </>
  )
}

export default ArticleSimpleList;