import BaseCache from "./BaseCache.provider";
import { parseJsonSafe, stringifyJsonSafe } from "../../utils/jsonSafe.utils";

class LocalStorageCache extends BaseCache {
  /**
   * @param {{ cacheTime: number }} props
   */
  constructor(props) {
    super(props);
    if (typeof localStorage === "undefined") {
      throw new Error("LocalStorage is not available for this browser");
    }
  }

  /**
   * @param {string} key
   */
  get(key) {
    const item = parseJsonSafe(localStorage.getItem(key));
    console.info("[LocalStorageCache](" + key + ") Getting cache...");

    if (!item) 
      return null; 

    if (item.expiry < Date.now()) {
      console.info(`[LocalStorageCache](${key}): Cache expired for key `);
      localStorage.removeItem(key);
      return null;
    }
    
    console.info(`[LocalStorageCache](${key}) TurboCache!!!`);
    return item.value;
  }

  /**
   * @param {string} key
   */
  set(key, object) {
    console.info("[LocalStorageCache](" + key + ") Setting cache...");
    const itemToStore = stringifyJsonSafe(object);
    
    if (itemToStore) {
      const item = {
        expiry: Date.now() + this.cacheTime,
        value: object,
      };
      console.info(`[LocalStorageCache](${key}) Storing cache`);
      localStorage.setItem(key, stringifyJsonSafe(item));
    }
  }
}

export default LocalStorageCache;
