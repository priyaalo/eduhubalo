import axiosInstance from "./axiosInstance";

const apiService = {
  get: (url, params = {}) => {
    return axiosInstance.get(url, { params });
  },

  post: (url, data = {}) => {
    return axiosInstance.post(url, data);
  },
}

export default apiService;