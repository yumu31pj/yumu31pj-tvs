export const fetchNews = async() => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/news`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("ニュースの取得に失敗しました")
  }
  return response.json();
}

export const createNews = async (title: string, content: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/news`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });
  if (!response.ok) {
    throw new Error("ニュースの作成に失敗しました")
  }
  return response.json();
}