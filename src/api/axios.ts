import axios from "axios";

const BASE_URL = "http://localhost:8000";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
