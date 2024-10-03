import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewsDataProps } from "@/types/types";

const useAPIFetch = (url: string) => {
  const [newsData, setNewsData] = useState<NewsDataProps[] | []>([]);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        const data = await response.data;
        setNewsData(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { newsData, error, loading };
};

export default useAPIFetch;
