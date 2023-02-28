import { instance as axios } from "./axiosInstance";

const create_user = async (user: {}) => await axios.post("/users", user);
const delete_user = async (id: string) => await axios.delete(`/users/${id}`);


export {
  create_user,
  delete_user,
}