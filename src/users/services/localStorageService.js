import { jwtDecode } from "jwt-decode";
const TOKEN = "userToken";

export const setTokenInLocalStorage = (encryptedToken) => {
  localStorage.setItem(TOKEN, encryptedToken);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};

export const getUser = () => {
  try {
    const userToken = getToken();
    console.log("decrypted token", jwtDecode(userToken));
    return jwtDecode(userToken);
  } catch (error) {
    return null;
  }
};
