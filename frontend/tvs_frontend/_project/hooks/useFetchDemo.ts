import axios from "axios";
import { useEffect, useState } from "react";

const useFetchDemo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState<any>();
  const [hasError, setHasError] = useState(false);
  const errorMessage = "Failed to fetch contents";

  const entryPoint = process.env.NEXT_PUBLIC_BE_BACKEND || "";

  useEffect(() => {
    const getDemo = async() => {
      try {
        const response = await axios.get(entryPoint);
        setResponse(response.data);
      } catch (e) {
        console.error(e);
        setHasError(true);
      } finally {
        setIsLoading(false)
      }
    };

    getDemo();
  },[])

  return {isLoading, response, hasError, errorMessage};
}

export default useFetchDemo;