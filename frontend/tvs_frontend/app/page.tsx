'use client';
import axios from "axios";
import { useEffect, useState } from "react";

const backendUrl = process.env.NEXT_PUBLIC_BE_BACKEND || ""

const Home = () => {

  const [response, setResponse] = useState();

  const getData = async () => {
    try {
      console.log(backendUrl);
      const response = await axios.get(`${backendUrl}/v1`);
      
      console.log("status code: ", response.status); // ステータスコードの取得
      console.log("response: ", response.data); // レスポンスデータの取得
      setResponse(response.data)
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    getData();
  },[])

  return (
    <>
      {JSON.stringify(response)}
    </>
  );
}

export default Home;
