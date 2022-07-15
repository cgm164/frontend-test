import React from "react";
import StorageContext from "./Storage.context";

const StorageProvider = (props) => {
  const { children, provider } = props;
  return (
    <StorageContext.Provider value={provider}>
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
