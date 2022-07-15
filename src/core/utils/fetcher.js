export const fetcher = async (url, ...opts) => {
  const res = await fetch(url, ...opts);
  try {
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const postFetcher = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};
