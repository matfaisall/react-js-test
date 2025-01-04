import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api", // Base URL untuk server Express
});

export default axiosInstance;
