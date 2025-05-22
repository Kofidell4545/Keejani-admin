import axios from "axios";

const api = axios.create({
  baseURL: "https://keejani-api.devlaps.co/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Handle different error status codes
      switch (error.response.status) {
        case 401:
          // Handle unauthorized
          console.log("Unauthorized - Redirect to login");
          break;
        case 403:
          // Handle forbidden
          console.log("Forbidden access");
          break;
        case 404:
          // Handle not found
          console.log("Resource not found");
          break;
        case 500:
          // Handle server error
          console.log("Server error");
          break;
        default:
          console.log("Other error occurred");
      }
    } else if (error.request) {
      // Network error
      console.log("Network error occurred");
    } else {
      console.log("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
