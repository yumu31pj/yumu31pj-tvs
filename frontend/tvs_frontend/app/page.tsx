'use client';
import useFetchNewsAll from "_project/hooks/useFetchNewsAll.hooks";

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
              <p>{item.updated_at}</p>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
}

export default Home;
