'use client';
import useFetchNewsAll from "@/_libs/hooks/_projects/useFetchNewsAll.hooks";
import usePostNews from "./_libs/hooks/_projects/usePostNews";

const Home = () => {
  const {isLoading, response, hasError, errorMessage} = useFetchNewsAll();

  const postData = {
    news_title: "Post test data title",
    news_body: "post test data body<br>post test data body's line2"
  }

  const {isPosting, postResponse, hasPostError, postErrorMessage} = usePostNews(postData);

  console.log(postErrorMessage);

  return (
    <>
      {response ? (
        <>  
          {JSON.stringify(response)}
        </>
      ) : null}

      <br />
      <div>- - - - - - - - -</div>

      {postResponse ? (
        <>
          {JSON.stringify(postResponse)}
        </>
      ) : null}
    </>
  );
}

export default Home;