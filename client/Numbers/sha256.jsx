export const sha256 = async (string) => {
  const binaryHash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder("utf-8").encode(string)
  );
  return btoa(String.fromCharCode.apply(null, new Uint8Array(binaryHash)))
    .split("=")[0]
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};
