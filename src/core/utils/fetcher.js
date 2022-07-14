export const fetcher = async (url, ...opts) => {
  const res = await fetch(url, ...opts);
  try {
    const data = await res.json();
    console.log("[Fetch] Fetched data from ", data);
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};
