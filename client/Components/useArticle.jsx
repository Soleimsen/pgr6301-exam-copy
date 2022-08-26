import { useState, useEffect } from "react";

export const useArticle = (param) => {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/articles/${param}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch ${res.status}: ${res.statusText}`);
      }
      const data = await res.json();
      setArticle(data);
    };
    fetchData();
  }, [param]);
  return article;
};

export const useEditArticle = (param) => {
  async (article) => {
    const res = await fetch(`/api/articles/${param}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch ${res.status}: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  };
};
