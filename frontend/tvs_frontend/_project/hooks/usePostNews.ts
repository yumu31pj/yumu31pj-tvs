import axios from "axios";
import { useState } from "react";

const usePostNews = () => {
  const [isPosting, setIsPosting] = useState(false);
  const [postResponse, setPostResponse] = useState<any>();
  const [hasPostError, setHasPostError] = useState(false);
  const postErrorMessage = "Failed to post content";

  const postNews = async (postData: any) => {
    setIsPosting(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BE_BASEURL}/api/news/`, postData);
      setPostResponse(response.data);
      setHasPostError(false);
    } catch (e) {
      console.error(e);
      setHasPostError(true);
    } finally {
      setIsPosting(false);
    }
  };

  return { postNews, isPosting, postResponse, hasPostError, postErrorMessage };
};

export default usePostNews;
