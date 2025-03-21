'use client';

import { NewsType } from "@/types/model.types";
import { deleteNews, fetchNews } from "@/utils/backend/news.queries";
import parse from "html-react-parser";
import { Suspense, useEffect, useState } from "react";

const PageNews = () => {
  const [newsList, setNewsList] = useState<NewsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse: NewsType[] = await fetchNews();
        setNewsList(apiResponse);
      } finally {
        setIsLoading(false)
      }
    };
    fetchData();
  }, [])

  const onClickHandler = async (id: string) => {
    if (window.confirm("本当に削除しますか？")) {
      try {
        await deleteNews(id);
        console.log(id + " のニュースを削除しました");
        const updatedNews = newsList.filter((item) => item.id !== id);
        setNewsList([...updatedNews]);
      } catch (error) {
        console.error("削除エラー:", error);
      }
    }
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <h2>NEWS</h2>
          {newsList && (
            <ul>
              {newsList.map((item: NewsType) => (
                <li key={item.id}>
                  <a href={`news/${item.id}`}>
                    <h3>{item.title}</h3>
                    <p>{parse(item.content)}</p>
                  </a>
                  <button onClick={() => onClickHandler(item.id)}>削除</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </Suspense>
  )
}

export default PageNews;