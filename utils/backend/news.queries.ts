export const fetchNews = async() => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/news`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("ニュースの取得に失敗しました")
  }
  return response.json();
}