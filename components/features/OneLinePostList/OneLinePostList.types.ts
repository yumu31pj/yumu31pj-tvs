export type OneLinePostListProps = {
  posts: OneLinePostProps[];
}

export type OneLinePostProps = {
  url: string;
  postDate: string;
  category?: string;
  title: string;
}