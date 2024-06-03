import { useCallback, useState } from "react";
import { useUser } from "../providers/UserProviders";
import {
  getUserData,
  login,
  signup,
  updateUser,
} from "../services/userApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routerModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnackbarProvider";
import useAxios from "../../hooks/useAxios";
import mapToModelUser from "../helpers/normalization/mapToModelUser";

const useUsers = () => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setSnack = useSnack();
  const { user, setUser, setToken } = useUser();
  useAxios();

  const handleLogin = useCallback(
    async (userLogin) => {
      setIsLoading(true);
      try {
        const token = await login(userLogin);
        setTokenInLocalStorage(token);
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
        await signup(normalizedUser);
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
  };
};

export default useUsers;
