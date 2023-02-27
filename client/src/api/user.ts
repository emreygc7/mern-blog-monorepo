import { instance as axios } from "./axiosInstance";

const create_user = async (user: {}) => await axios.post("/users", user);


export {
  create_user,
}