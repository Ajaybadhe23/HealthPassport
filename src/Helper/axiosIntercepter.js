// src/api/axiosInstance.js
import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: "http://192.168.129.74:8080", // Replace with your API base URL
  timeout: 10000, // optional timeout
});

// Add a request interceptor to include auth token
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage or context
    const token = localStorage.getItem("authToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: Add a response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized! Redirect to login.");
      // Optionally: redirect to login page
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
