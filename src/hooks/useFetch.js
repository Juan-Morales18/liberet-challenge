import { useState, useEffect } from "react";

function useFetch(service, url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      const res = await service(url);

      if (!res.error) {
        setData(res.data);
      } else {
        setError(res);
      }

      setIsLoading(false);
    };
    getData();
  }, [url]);

  return { data, error, isLoading };
}

export { useFetch };
