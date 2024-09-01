'use client';
import useFetchNewsAll from "@/_libs/hooks/_projects/useFetchNewsAll.hooks";
import { NewsFrom } from "_project/components/NewsForm/news-form";
import { FormEventHandler } from "react";
import usePostNews from "./_libs/hooks/_projects/usePostNews";

const Home = () => {
  const { isLoading, response, hasError, errorMessage } = useFetchNewsAll();

  return (
    <>
      {response ? (
        <>
          {response.map((item:any, key:number) => (
            <div key={key} style={{display: "flex", gap: "15px"}}>
              <h3>{item.news_title}</h3>
              <p>{item.news_body}</p>
            </div>
          ))}
        </>
      ) : null}
      <br />
      <NewsForm />
    </>
  );
}

const NewsForm = () => {
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
    // <>
    //   <form onSubmit={handleSubmit}>
    //     <input type="text" name="title" style={{border: "1px solid #333", display: "block"}} defaultValue="" />
    //     <textarea name="body" style={{border: "1px solid #333", display: "block"}} defaultValue="" />
    //     <button type="submit" style={{border: "1px solid #333"}}>
    //       submit
    //     </button>
    //   </form>
    // </>
    <NewsFrom />
  )
}

export default Home;
