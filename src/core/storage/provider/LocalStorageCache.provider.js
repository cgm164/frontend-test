import BaseCache from "./BaseCache.provider";
import { parseJsonSafe, stringifyJsonSafe } from "../../utils/jsonSafe.utils";

class LocalStorageCache extends BaseCache {
  /**
   * @param {{ cacheTime: number }} props
   */
  constructor(props) {
    super(props);
    this.subscribers = {};
    if (typeof localStorage === "undefined") {
      throw new Error("LocalStorage is not available for this browser");
    }
  }

  /**
   * @param {string} key
   */
  get(key) {
    const item = parseJsonSafe(localStorage.getItem(key));

    if (!item) return null;

    if (item.expiry < Date.now()) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  }

  /**
   * @param {string} key
   */
  set(key, object) {
    const itemToStore = stringifyJsonSafe(object);

    if (itemToStore) {
      const item = {
        expiry: Date.now() + this.cacheTime,
        value: object,
      };
      localStorage.setItem(key, stringifyJsonSafe(item));

      if (this.subscribers[key]) {
        this.subscribers[key].forEach((callback) => {
          callback(item.value);
        });
      }
    }
  }

  /**
   * @param {string} key
   * @param {(data) => void} callback
   */
  subcribe(key, callback) {
    if (!this.subscribers[key]) {
      this.subscribers[key] = [];
    }
    this.subscribers[key].push(callback);
  }

  unsubcriber(key, callback) {
    if (this.subscribers[key]) {
      this.subscribers[key] = this.subscribers[key].filter(
        (subscriber) => subscriber !== callback
      );
    }
  }
}

export default LocalStorageCache;
