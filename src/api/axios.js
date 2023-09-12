import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = "http://localhost:8000";

export const apiInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// Add a response interceptor
apiInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
