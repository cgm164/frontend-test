class BaseCache {
  /**
   * @param {{ cacheTime: number }} props
   */
  constructor(props) {
    this.cacheTime = props.cacheTime;
    if (this.constructor === BaseCache) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  /**
   * Get the value of the key.
   * @param {string} key
   */
  get(key) {
    throw new Error("Abstract method.");
  }

  /**
   * Set the value of the key.
   * @param {string} key
   * @param {string} value
   */
  set(key, value) {
    throw new Error("Abstract method.");
  }

  /**
   * @param {string} key
   * @param {(data) => void} callback
   */
  subcribe(key, callback) {
    throw new Error("Abstract method.");
  }

  /**
   * @param {string} key
   * @param {(data) => void} callback
   */
  unsubcriber(key, callback) {
    throw new Error("Abstract method.");
  }
}

export default BaseCache;
