import axios from "axios";
import { useEffect } from "react";

import { useSnack } from "../providers/SnackbarProvider";
import { useUser } from "../users/providers/UserProviders";

export default function useAxios() {
  const { token } = useUser();

  const setSnack = useSnack();

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token;

    const requestInterceptor = axios.interceptors.request.use((data) => {
      return Promise.resolve(data);
    });

    const responseInterceptor = axios.interceptors.response.use(
      null,
      (error) => {
        if (error.message) setSnack("error", error.message);
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [token, setSnack]);
}
