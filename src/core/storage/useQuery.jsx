import React from "react";
import useStorage from "./useStorage";

/**
 * Returns data from persistent storage.
 * @param {string} key
 * @param {(key: string) => any | null} requestFn
 */
const useQuery = (key, requestFn) => {
  const storage = useStorage();
  const [data, setData] = React.useState(null);

  const fetchData = React.useCallback(async () => {
    if (!key) return;
    const stData = storage.get(key);

    if (!stData) {
      const data = await requestFn(key);
      storage.set(key, data);
      setData(data);
      return;
    }

    setData(stData);
  }, [storage, key, requestFn]);

  React.useEffect(() => {
    fetchData();
  }, [key, requestFn]);

  return { data };
};

export default useQuery;
