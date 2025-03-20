'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { NewsRegisterSchema } from '@/schemas/news';
import { createNews } from '@/utils/backend/news.queries';

const PagePostNews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof NewsRegisterSchema>>({
    resolver: zodResolver(NewsRegisterSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  })

  const onSubmitHandler = async (values: z.infer<typeof NewsRegisterSchema>) => {
    const response = await createNews(values.title, values.content);
    console.log(JSON.stringify(response));
  }

  return (
    <section>
      <h2>NewPost</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <label htmlFor="title">タイトル</label>
          <input type="text" {...register('title')} placeholder="タイトルを入力"/>
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <label htmlFor="content">本文</label>
          <textarea {...register('content')} placeholder="本文を入力"></textarea>
          {errors.content && <p>{errors.content.message}</p>}
        </div>
        <div>
          <button type="submit">登録する</button>
        </div>
      </form>
    </section>
  )
}

export default PagePostNews;