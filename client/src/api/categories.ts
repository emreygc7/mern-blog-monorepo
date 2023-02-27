import { instance as axios } from "./axiosInstance";

const create_category = async (data: any) => await axios.post("/categories", data);

const update_category = async (id: string, data: any) => await axios.put(`/categories/${id}`, data);

const delete_category = async (id: string) => await axios.delete(`/categories/${id}`);

export {
    create_category,
    update_category,
    delete_category
}