import { proxy } from "valtio";
import { create_category, delete_category, update_category } from '../api/categories';
import toast  from 'react-hot-toast';

interface Categories {
  categories: any;
  category: {
    name: string;
  }
  addCategory: (category: string) => void;
  createCategory: (category: {}) => void;
  setCategories: (categories: any) => void;
  deleteCategory: (id: string) => void;
  updateCategory: (id: string, category: {}) => void;
}

export const categoriesStore = proxy<Categories>({
  categories: [],
  category: {
    name: "",
  },
  addCategory: (category) => {
    categoriesStore.category.name = category;
  },
  createCategory: async (category) => {
    try{
      const response = await create_category(category);
      if(response.status === 201) {
        toast.success('Category created successfully');
        categoriesStore.category.name = "";
      }
    }catch(error: any) {
      toast.error(error?.response?.data?.error);      
    }
  },
  setCategories: (categories) => {
    categoriesStore.categories = categories;
  },
  deleteCategory: async (id) => {
    try{
      const response = await delete_category(id);
      if(response.status === 200) {
        toast.success('Category deleted successfully');
      }
    }catch(error: any) {
      toast.error(error?.response?.data?.error);      
    }
  },
  updateCategory: async (id, category) => {
    try{
      const response = await update_category(id,category);
      if(response.status === 200) {
        toast.success('Category updated successfully');
        categoriesStore.category.name = "";
      }
    }catch(error: any) {
      toast.error(error?.response?.data?.error);      
    }
  }
});

