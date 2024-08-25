import { useEffect, useState } from "react";
import { MicroCMSQueryType } from "../../types/MicroCMSQueries.types";
import { getMicroCMSConnection } from "../../utils/getMicroCMSClient";
const useFetchContens = (
  microCMSQuery: MicroCMSQueryType
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState<any>();
  const [hasError, setHasError] = useState(false);
  const errorMessage = "Failed to fetch contents";

  const offset = microCMSQuery.offset ? microCMSQuery.offset : 0;
  const order = microCMSQuery.orderType ? microCMSQuery.orderType : '-publishedAt';

  useEffect(() => {
    const client = getMicroCMSConnection();

    const getContentsList = async() => {
      try {
        const apiResponse = await client.get({
          endpoint: microCMSQuery.endpointId,
          queries: {
            limit: microCMSQuery.postsPerPage,
            offset: offset,
            orders: order,
          }
        });
        setResponse(apiResponse)
      } catch (e) {
        console.error(e);
        setHasError(true);
      } finally {
        setIsLoading(false)
      }
    };
    getContentsList();
  },[])
  return {isLoading, response, hasError, errorMessage};
}

export default useFetchContens;