import { jwtDecode } from "jwt-decode";
import {
  LOCAL_STORAGE_KEYS,
  getItemInLocalStorage,
} from "./localStorageService";

export const getUser = () => {
  try {
    const userToken = getItemInLocalStorage(
      LOCAL_STORAGE_KEYS.USER_TOKEN,
      null
    );
    return jwtDecode(userToken);
  } catch (error) {
    return null;
  }
};
