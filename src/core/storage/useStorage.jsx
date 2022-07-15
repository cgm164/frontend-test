import React from "react";
import StorageContext from "./Storage.context";

const useStorage = () => {
  const useStorage = React.useContext(StorageContext);

  if (!useStorage) {
    throw new Error("useStorage must be used within a StorageProvider");
  }

  return useStorage;
};

export default useStorage;
