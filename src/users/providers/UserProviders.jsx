import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  LOCAL_STORAGE_KEYS,
  getItemInLocalStorage,
} from "../services/localStorageService";
import { getUser } from "../services/userService";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    getItemInLocalStorage(LOCAL_STORAGE_KEYS.USER_TOKEN, null)
  );

  useEffect(() => {
    if (!user) {
      const userFromLocalStorage = getUser();
      setUser(userFromLocalStorage);
    }
  }, [user]);

  const value = useMemo(
    () => ({ user, setUser, token, setToken }),
    [user, token]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useData must be use withing a Provider");
  return context;
};
