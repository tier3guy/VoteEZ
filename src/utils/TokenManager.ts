import Cookies from "js-cookie";

const DEFAULT_EXPIRY_TIME = 2; // Default token expiry time in hours

/**
 * Sets an access token in a cookie.
 *
 * @param key - The cookie key where the access token will be stored.
 * @param token - The access token to store in the cookie.
 * @param expiresIn - The token's expiration time in hours.
 */
export const setAccessToken = (
  key: string = "access_token",
  token: string = "",
  expiresIn: number = DEFAULT_EXPIRY_TIME
): void => {
  Cookies.set(key, token, { expires: expiresIn / 24 });
};

/**
 * Retrieves the access token from a cookie.
 *
 * @param key - The cookie key where the access token is stored.
 * @returns The access token if found in the cookie, or null if it doesn't exist.
 */
export const getAccessToken = (key: string = "access_token"): string | null => {
  const cookie: string | undefined = Cookies.get(key);
  if (cookie === undefined) return null;
  return cookie;
};

/**
 * Removes the access token from the cookie.
 *
 * @param key - The cookie key where the access token is stored.
 */
export const removeToken = (key: string = "access_token"): void => {
  Cookies.remove(key);
};
