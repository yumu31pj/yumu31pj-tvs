'use client';
import useFetchDemo from "_project/hooks/useFetchDemo";

const Home = () => {

  const {isLoading, response, hasError, errorMessage} = useFetchDemo();

  return (
    <div>
      {response ? (
        <div>
          {Object.entries(response).map(([key, value]) => (
            <p key={key}>
              {key}: {String(value)}
            </p>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Home;
