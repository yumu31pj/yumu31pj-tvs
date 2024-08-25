import ResponsiveImage from "@/_libs/components/atoms/images/ResponsiveImage/ResponsiveImage";
import { LabelType } from "@/_libs/components/atoms/texts/Label/Label.types";
import SimpleTitleH3 from "@/_libs/components/atoms/titles/SimpleTitle/SimpleTitleH3/SimpleTitleH3";
import styles from "./ArticleCardWithThumbnail.module.scss";
import { ArticleCardWithThumbnailType } from "./ArticleCardWithThumbnail.types";

const ArticleCardWithThumbnail = (props: ArticleCardWithThumbnailType) => {
  const {imageItem, title, linkTo, date, categories} = props;

  return (
    <div className={styles['article-card-with-thumbnail']}>
      <a href={linkTo}>
        <div className={styles['article-card-with-thumbnail__thumbnail']}>
          <ResponsiveImage
            srcSP={imageItem.srcSP}
            srcPC={imageItem.srcPC}
            srcWebpSP={imageItem.srcWebpSP}
            srcWebpPC={imageItem.srcWebpPC}
            altText={title}
            breakpoint={imageItem.breakpoint}
          />
        </div>
        <div className={styles['article-card-with-thumbnail__detail']}>
          <div className={styles['article-card-with-thumbnail__properties']}>
            {categories ? (
              <div className={styles['article-card-with-thumbnail__categories']}>
              {categories.listItems.map((category: LabelType, key: number) => (
                <span className={styles['article-card-with-thumbnail__category']}>{category.text}</span>
              ))}
              </div>
            ) : (null)}
            <span className={styles['article-card-with-thumbnail__date']}>{date}</span>
          </div>
            
          <SimpleTitleH3 title={title} />
        </div>
      </a>
    </div>
  )
}

export default ArticleCardWithThumbnail;