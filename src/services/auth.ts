import axios from "axios";
import Cookies from "js-cookie";

const authApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API,
  withCredentials: true
});

authApi.interceptors.request.use(
  config => {
    const token = Cookies.get('token') 
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

export default authApi;