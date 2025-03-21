import { OneLinePostList } from "@/components/features/OneLinePostList/OneLinePostList";
import SectionWrapper from "@/components/layouts/SectionWrapper/SectionWrapper";
import { convertNewsToPosts } from "@/components/pages/home/HomeNews/convertNewsToPosts";
import { NewsType } from "@/types/model.types";
import { fetchNews } from "@/utils/backend/news.queries";

export const HomeNews = async () => {
  const news: NewsType[] = await fetchNews(3);
  // 取得したデータをconvertNewsToPosts関数を使ってOneLinePostListに渡せるよう変換
  const posts = convertNewsToPosts(news);

  if (!news) {
    return null;
  }

  return (
    <SectionWrapper>
      <h2>お知らせ</h2>
      <OneLinePostList posts={posts} />
    </SectionWrapper>
  )
}