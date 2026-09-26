import { apiClient } from "./apiClient";

export const authService = {
  login: async ({ email, password }) => {
    return apiClient("/api/auth/login", {
      method: "POST",
      body: { email, password },
    });
  },

  register: async (payload) => {
    return apiClient("/api/auth/register", {
      method: "POST",
      body: payload,
    });
  },

  sendResetCode: async ({ email }) => {
    return apiClient("/api/auth/forgot-password", {
      method: "POST",
      body: { email },
    });
  },

  verifyOtp: async ({ email, otp }) => {
    return apiClient("/api/auth/verify-otp", {
      method: "POST",
      body: { email, otp },
    });
  },

  resetPassword: async ({ email, password }) => {
    return apiClient("/api/auth/reset-password", {
      method: "POST",
      body: { email, password },
    });
  },
};