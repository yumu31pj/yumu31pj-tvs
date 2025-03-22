'use client';

import { NewsRegisterSchema } from "@/schemas/news";
import { NewsType } from "@/types/model.types";
import { fetchNewsSingle, updateNews } from "@/utils/backend/news.queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import * as z from "zod";

const PageNewsSingle = () => {
  const params = useParams();
  const id = params.id as string;
  const [response, setResponse] = useState<NewsType | null>(null);
  const [isLoading, setIsLoading] = useState(true); // ローディング状態を追加

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof NewsRegisterSchema>>({
    resolver: zodResolver(NewsRegisterSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse: NewsType = await fetchNewsSingle(id);
        setResponse(apiResponse);
        console.log(apiResponse);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (response) {
      reset({
        title: response.title,
        content: response.content,
      });
    }
  }, [response, reset]);

  const onSubmitHandler = async (values: z.infer<typeof NewsRegisterSchema>) => {
    const response = await updateNews(id, values.title, values.content)
    console.log(JSON.stringify(response));
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {isLoading ? (
        <p>Loading...</p> // ローディング中はローディングメッセージを表示
      ) : response ? (
        <section>
          <h2>Update Post</h2>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div>
              <label htmlFor="title">タイトル</label>
              <input type="text" {...register('title')} placeholder="タイトルを入力" />
              {errors.title && <p>{errors.title.message}</p>}
            </div>
            <div>
              <label htmlFor="content">本文</label>
              <textarea {...register('content')} placeholder="本文を入力"></textarea>
              {errors.content && <p>{errors.content.message}</p>}
            </div>
            <div>
              <button type="submit">更新する</button>
            </div>
          </form>
        </section>
      ) : (
        <p>ニュースが見つかりませんでした</p>
      )}
    </Suspense>
  );
};

export default PageNewsSingle;