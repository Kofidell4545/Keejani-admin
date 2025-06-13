import api from "../config/axios";

export const loginUser = async (credentials) => {
  try {
    console.log("Attempting login with:", {
      email: "davidnhyiraba8@gmail.co",
      password: "Admin123.",
      role: "ADMIN",
    });

    const response = await api.post("/auth/login", {
      email: "davidnhyiraba8@gmail.com",
      password: "Admin123d.",
      role: "ADMIN",
    });

    console.log("Full API Response:", response);

    // Store the token from response
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    }

    return response.data;
  } catch (error) {
    console.error("Detailed login error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
};

// Test the login
export const testAuth = async () => {
  try {
    const result = await loginUser({
      email: "pandit.alabi@devlaps.co",
      password: "Admin123.",
    });
    console.log("Login successful:", result);
    return result;
  } catch (error) {
    console.error("Test auth failed:", error);
    throw error;
  }
};
