import axios from "axios";
console.log(process.env.REACT_APP_AUTH_API);
const authApi = axios.create({
  baseURL: process.env.REACT_APP_AUTH_API,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default authApi;