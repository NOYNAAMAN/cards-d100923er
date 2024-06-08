import axios from "axios";
import { addFailedAttempt, isUserBlocked } from "./blockUserService";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

export const login = async (userLogin) => {
  try {
    if (isUserBlocked(userLogin.email)) {
      throw new Error("The user is blocked, please try again later.");
    }
    const response = await axios.post(apiUrl + "/login", userLogin);
    const data = response.data;
    return data;
  } catch (err) {
    if (err.response) {
      if (err.response.status === 400) {
        addFailedAttempt(userLogin.email)
      }
      throw new Error(err.response.data);
    }
    throw new Error(err.message);
  }
};

export const signUp = async (normalizedUser) => {
  try {
    const { data } = await axios.post(apiUrl, normalizedUser);
    return data;
  } catch (err) {
    throw new Error(err.response.data);
  }
};

export const getUserData = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}/${id}`);
    return data;
  } catch (err) {
    throw new Error(err.response.data);
  }
};

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}`);
    return data;
  } catch (err) {
    throw new Error(err.response.data);
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const { data } = await axios.put(`${apiUrl}/${userId}`, userData);
    return data;
  } catch (err) {
    throw new Error(err.response.data);
  }
};

export const deleteUser = async (userId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/${userId}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const changeUserBussinesStatus = async (id) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/${id}`);
    return data;
  } catch (err) {
    throw new Error(err.response.data);
  }
};
