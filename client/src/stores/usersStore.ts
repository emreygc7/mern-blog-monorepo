import { proxy } from 'valtio';
import { create_user } from '../api/user';
import { login as login_user } from '../api/auth'
import toast from 'react-hot-toast'




interface User {
  username: string;
  email?: string;
  password: string;
}

interface State {
  users: User[];
  user: User;
  setUser: (attribute: string, value: string) => void;
  createUser: (user: User) => Promise<void>;
}

export const usersStore = proxy<State>({
  users: [] as User[],
  user: {
    username: '',
    email: '',
    password: '',
  } as User, 
  setUser: (attribute: string, value: string) => {
    usersStore.user[attribute as keyof User] = value;
  },
  createUser: async (user: User) => {
    try{
      const response = await create_user(user);
      if(response.status === 201) {
        toast.success('User created successfully, you will be redirected to the login page');
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000);
      }
    }catch(error: any) {
      toast.error(error?.response?.data?.error);      
    }
  },  

});
