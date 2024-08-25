'use client';
import useFetchNewsAll from "@/_libs/hooks/_projects/useFetchNewsAll.hooks";

const Home = () => {
  const {isLoading, response, hasError, errorMessage} = useFetchNewsAll();

  return (
    <>
      {response ? (
        <>
          {JSON.stringify(response)}
        </>
      ) : null}
    </>
  );
}

export default Home;