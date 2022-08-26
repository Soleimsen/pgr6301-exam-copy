export const putJSON = async (url, object) => {
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(object),
  });
  if (!res.ok) {
    throw new Error(`Failed to put ${res.status}: ${res.statusText}`);
  }
};
