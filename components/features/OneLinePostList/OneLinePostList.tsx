import Link from "next/link";
import styles from "./OneLinePostList.module.scss";
import { OneLinePostListProps, OneLinePostProps } from "./OneLinePostList.types";

export const OneLinePostList = (props: OneLinePostListProps) => {
  const { posts } = props;

  return (
    <ul className={styles['post-list']}>
      {posts.map((post: OneLinePostProps, key: number) => (
        <li key={key}>
          <Link href={post.url} className={styles['post']}>
            <time dateTime={post.postDate} className={styles['post__date']}>{post.postDate}</time>
            {post.category && <span className={styles['post__category']}>{post.category}</span>}
            <p className={styles['post__title']}>{post.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}