import { useState, useCallback } from "react";

export const useQuery = (obj, { variables, options }) => {
  const [isLoading, setStatus] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const fetchData = useCallback(async () => {
    setStatus(true);
    setError("");

    try {
      const response = await obj.query({ ...variables, options });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
        setData([]);
        return;
      }
      setData(data);
      setStatus(false);
    } catch (e) {
      setError(e.message);
    }
  }, [obj, variables, options]);

  return { isLoading, data, error, refetch: fetchData };
};
