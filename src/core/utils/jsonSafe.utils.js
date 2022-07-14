/**
 * Parse JSON string into an object.
 * @param {string} str 
 * @returns {object}
 */
export const parseJsonSafe = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
};

/**
 * Stringify an object into a JSON string.
 * @param {object} obj 
 * @returns 
 */
export const stringifyJsonSafe = (obj) => {
  try {
    return JSON.stringify(obj);
  } catch (e) {
    return null;
  }
}
