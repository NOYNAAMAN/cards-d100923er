import axios from "axios";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

export const login = async (userLogin) => {
  try {
    console.log("userLogin", userLogin);
    const response = await axios.post(apiUrl + "/login", userLogin);
    const data = response.data;
    console.log("login response data", response);
    return data;
  } catch (err) {
    throw new Error(err.response.data);
  }
};

export const signup = async (normalizedUser) => {
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

export const getallUsers = async () => {
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
    console.log("Update user function run", userData);
    return data;
  } catch (err) {
    throw new Error(err.response.data);
  }
};
