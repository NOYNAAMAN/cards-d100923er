export const setItemInLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const removeItemInLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const getItemInLocalStorage = (key, defaultValue) => {
  return localStorage.getItem(key) || defaultValue;
};

export const getToken = () => {
  return getItemInLocalStorage(LOCAL_STORAGE_KEYS.USER_TOKEN);
};
export const removeToken = () => {
  removeItemInLocalStorage(LOCAL_STORAGE_KEYS.USER_TOKEN);
};

export const LOCAL_STORAGE_KEYS = {
  USER_TOKEN: "userToken",
  INVALID_LOGIN_ATTEMPTS: "invalidLoginAttempts",
};
