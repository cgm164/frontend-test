/**
 * @param {string} str
 */
export const strToPath = (str) => {
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}