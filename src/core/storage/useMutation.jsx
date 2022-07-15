import React from "react";
import useStorage from "./useStorage";

const useMutation = (key, requestFn) => {
  const storage = useStorage();

  const mutate = React.useCallback(async (data) => {
    if (!key) return;
    const newData = await requestFn(key, data);
    storage.set(key, newData);
  }, [key, requestFn, storage]);

  return { mutate };
};

export default useMutation;
