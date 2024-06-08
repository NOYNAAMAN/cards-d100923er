import { useCallback, useState } from "react";
import { useUser } from "../providers/UserProviders";
import {
  changeUserBussinesStatus,
  deleteUser,
  getUserData,
  getAllUsers,
  login,
  signUp,
  updateUser,
} from "../services/userApiService";
import {
  LOCAL_STORAGE_KEYS,
  removeToken,
  setItemInLocalStorage,
} from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routerModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnackbarProvider";
import useAxios from "../../hooks/useAxios";
import mapToModelUser from "../helpers/normalization/mapToModelUser";

import DeleteIcon from "@mui/icons-material/Delete";
import { usePopup } from "../../providers/PopupProvider";
import { getUser } from "../services/userService";

const useUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setSnack = useSnack();
  const { user, setUser, setToken } = useUser();
  const { showPopup } = usePopup();
  useAxios();

  const handleLogin = useCallback(
    async (userLogin) => {
      setIsLoading(true);
      try {
        const token = await login(userLogin);
        setItemInLocalStorage(LOCAL_STORAGE_KEYS.USER_TOKEN, token);
        setToken(token);
        setUser(getUser());
        navigate(ROUTES.CARDS);
      } catch (error) {
        setError(error.message);
        setSnack("error", error.message);
      }
      setIsLoading(false);
    },
    [setToken, setUser, navigate, setSnack]
  );

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
    navigate(ROUTES.ROOT);
  }, [setUser, navigate]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      setIsLoading(true);
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signUp(normalizedUser);
        await handleLogin({
          email: userFromClient.email,
          password: userFromClient.password,
        });
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [handleLogin]
  );

  const limitedAccesLoginAlert = () => {
    setSnack(
      "warning",
      "Please log in to view this page. You are redirecting to home page"
    );
    setTimeout(() => {
      navigate(ROUTES.ROOT);
    }, 2500);
    return null;
  };

  const handleGetUser = useCallback(async (id) => {
    setIsLoading(true);
    try {
      const userData = await getUserData(id);
      setIsLoading(false);
      return userData;
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleGetUsers = useCallback(async () => {
    setIsLoading(true);

    try {
      const usersData = await getAllUsers();
      setIsLoading(false);
      return usersData;
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleUpdateUser = useCallback(
    async (id, userData) => {
      setIsLoading(true);
      try {
        const response = await updateUser(id, mapToModelUser(userData));
        setSnack("success", "Updated successfully");
        setIsLoading(false);
        navigate(ROUTES.ROOT);
        return response;
      } catch (error) {
        setError(error.message);
      }
    },
    [setSnack, navigate]
  );

  const handeleDeleteUser = useCallback(
    async (userId) => {
      showPopup(
        "Delete User",
        "Are you sure you want to delete this user?",

        async () => {
          setIsLoading(true);
          try {
            const user = await deleteUser(userId);
            setUser(user);
            setSnack("success", "The user has been successfully deleted");
            setTimeout(() => {
              getAllUsers();
            }, 1000);
          } catch (error) {
            setError(error.message);
          } finally {
            setIsLoading(false);
          }
        },
        null,
        DeleteIcon,
        "white",
        "red"
      );
    },
    [setSnack, setUser, showPopup]
  );

  const changeUserStatus = useCallback(
    async (user, currentStatus) => {
      try {
        const response = await changeUserBussinesStatus(user);

        if (currentStatus) setSnack("success", "User changed to not business");
        else setSnack("success", "User become member of IsBusiness");

        return response;
      } catch (error) {
        setError(error.message);
      }
    },
    [setSnack]
  );

  return {
    user,
    isLoading,
    error,
    handleLogin,
    handleLogout,
    handleSignup,
    limitedAccesLoginAlert,
    handleGetUser,
    handleUpdateUser,
    handleGetUsers,
    changeUserStatus,
    handeleDeleteUser,
  };
};

export default useUsers;
