import axios from "axios";
const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";
const googelMapKey = "AIzaSyCnivG9jiYuxJxHMUPLOIm7EAVLNSv69ns";
const googleMapUrl = "https://maps.googleapis.com/maps/api/geocode/json";

export const getCards = async () => {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getCard = async (cardId) => {
  try {
    const response = await axios.get(`${apiUrl}/${cardId}`);
    const data = response.data;
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getMyCards = async () => {
  try {
    const response = await axios.get(`${apiUrl}/my-cards`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const deleteCard = async (cardId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const createCard = async (card) => {
  try {
    const { data } = await axios.post(apiUrl, card);
    return data;
  } catch (error) {
    console.error("Error making request:", error.message);
    if (error.response) {
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received for the request:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
    return Promise.reject(error.message);
  }
};

export const editCard = async (cardId, normalaizedCard) => {
  try {
    const { data } = await axios.put(`${apiUrl}/${cardId}`, normalaizedCard);
    return data;
  } catch (error) {
    console.error("Error making request:", error.message);
    if (error.response) {
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received for the request:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
    return Promise.reject(error.message);
  }
};

export const changeLikeStatus = async (cardId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const getLocationCoordniate = async (address) => {
  const params = {
    key: googelMapKey,
    address,
    loading: "async",
  };
  axios.defaults.headers.common["x-auth-token"] = null;
  try {
    if (process.env.REACT_APP_IS_PRODUCTION) {
      const response = await axios.get(googleMapUrl, { params });
      return response.data.results[0].geometry.location;
    } else {
      return {
        lat: 32.084041,
        lng: 34.887762,
      };
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
