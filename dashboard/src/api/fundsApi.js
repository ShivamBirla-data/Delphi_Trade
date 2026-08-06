// frontend/api/fundsApi.js
// -----------------------------------------------------------------------------
// Centralized Axios setup for the Funds module.
// - Automatically attaches the JWT token (from localStorage) to every request.
// - Exposes clean functions the Funds page / popups can call directly.
// -----------------------------------------------------------------------------

import axios from "axios";

// Base URL of the backend API. Update this to match your backend's address
// (e.g. via an environment variable in a real project: process.env.REACT_APP_API_URL)
const API_BASE_URL = "http://localhost:3002";

// Create a reusable Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Attach the JWT token to every outgoing request automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // token saved at login time
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ---- API functions used by the Funds page ----

// Fetch current fund details for the logged-in user
export const getFunds = () => api.get("/funds");

// Add funds to the logged-in user's account
export const addFunds = (amount) => api.post("/addFunds", { amount });

// Withdraw funds from the logged-in user's account
export const withdrawFunds = (amount) => api.post("/withdrawFunds", { amount });

export default api;
