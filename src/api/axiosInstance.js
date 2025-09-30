import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://aloeducationalhub.com/api",
});


export default axiosInstance;

