export const fetchNews = async () => {
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

/* *******************************************************************
 Queries fror news single
 ****************************************************************** */

export const fetchNewsSingle = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/news/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("ニュースの取得に失敗しました")
  }
  return response.json();
}

export const updateNews = async (id: string, title: string, content: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/news/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, content }),
  });
  if (!response.ok) {
    throw new Error("ニュースの更新に失敗しました")
  }
  return response.json();
}

export const deleteNews = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/news/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("ニュースの削除に失敗しました")
  }
  return response.json();
}