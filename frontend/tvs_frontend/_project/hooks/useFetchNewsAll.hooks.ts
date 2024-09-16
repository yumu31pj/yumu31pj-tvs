import axios from "axios";
import { useEffect, useState } from "react";

const useFetchNewsAll = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState<any>();
  const [hasError, setHasError] = useState(false);
  const errorMessage = "Failed to fetch contents";

  useEffect(() => {
    const getNewsAll = async() => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BE_BASEURL}/api/news/`);
        setResponse(response.data);
      } catch (e) {
        console.error(e);
        setHasError(true);
      } finally {
        setIsLoading(false)
      }
    };

    getNewsAll();
  },[])

  return {isLoading, response, hasError, errorMessage};
}

export default useFetchNewsAll;