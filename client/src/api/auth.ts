import { instance as axios } from "./axiosInstance";

const login = async (data: {}) => await axios.post('/auth/login', data);

export {
  login
}