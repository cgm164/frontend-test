import React from "react";
import useStorage from "./useStorage";

const useQuery = (key, requestFn) => {
  const storage = useStorage();
  const [data, setData] = React.useState(null);
  
  const onDataChange = (newData) => setData(newData);

  const fetchData = React.useCallback(async () => {
    if (!key) return;

    storage.subcribe(key, onDataChange);

    const stData = storage.get(key);

    if (!stData && requestFn) {
      const data = await requestFn(key);
      storage.set(key, data);
      return;
    }

    setData(stData);

    return () => {
      storage.unsubscribe(key, onDataChange);
    };
  }, [storage, key, requestFn]);

  React.useEffect(() => {
    fetchData();
  }, [key, requestFn, fetchData]);

  return { data };
};

export default useQuery;
