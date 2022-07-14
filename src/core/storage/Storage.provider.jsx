import React from "react";
import BaseCache from "./provider/BaseCache.provider";
import StorageContext from "./Storage.context";

/**
 * @param {{ children: React.ReactNode, provider: BaseCache }} props
 */
const StorageProvider = (props) => {
  const { children, provider } = props;
  return (
    <StorageContext.Provider value={provider}>
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
