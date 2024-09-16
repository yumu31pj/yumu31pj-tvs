'use client';

import NewsForm from "_project/components/NewsForm/news-form";
import usePostNews from "_project/hooks/usePostNews";
import { FormEventHandler } from "react";

const PagePostNews = () => {
  const { postNews, isPosting, hasPostError, postErrorMessage } = usePostNews();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const title = form.get("title") || "";
    const body = form.get("body") || "";
    const postData = {
      news_title: title,
      news_body: body
    };

    try {
      await postNews(postData);
      window.location.reload();
    } catch (error) {
      console.error(postErrorMessage);
    }
  }

  return (
    <NewsForm />
  )
}

export default PagePostNews;  