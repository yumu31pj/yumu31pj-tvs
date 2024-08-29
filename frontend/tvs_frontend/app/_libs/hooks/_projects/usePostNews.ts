import axios from "axios";
import { useEffect, useState } from "react";

const usePostNews = (postData: any) => {
  const [isPosting, setIsPosting] = useState(true);
  const [postResponse, setPostResponse] = useState<any>();
  const [hasPostError, setHasPostError] = useState(false);
  const postErrorMessage = "Failed to post content";

  useEffect(() => {
    const postNews = async() => {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BE_BASEURL}/api/news/`, postData);
        setPostResponse(response);
      } catch (e) {
        console.error(e);
        setHasPostError(true);
      } finally {
        setIsPosting(false)
      }
    };

    postNews();
  }, [])

  return {isPosting, postResponse, hasPostError, postErrorMessage};
}

export default usePostNews;