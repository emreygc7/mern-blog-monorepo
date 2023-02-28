import React, { useState, useContext } from 'react'
import { useSnapshot } from 'valtio'
import { usersStore } from '../../stores/usersStore'
import { useLocation } from 'react-router-dom'
import { login as login_user } from '../../api/auth';
import toast from 'react-hot-toast'
import { userContext } from '../../context/UserContext'
 
function Form() {

  const [showPassword, setShowPassword] = useState(false)

  const state = useSnapshot(usersStore)

  const { pathname } = useLocation()

  const {state: contextState, dispatch} = useContext(userContext)

  

  const login = async (user: object) => {
    try{
      const response = await login_user(user);
      if(response.status === 200) {
        toast.success('You are logged in');
        dispatch({type: "LOGIN_SUCCESS", payload: response.data.token})
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      }
    }catch(error: any) {
      toast.error(error?.response?.data?.message);
    }
  }
  
  

  return (
    <form className="mx-auto mt-8 mb-0 max-w-md space-y-4">
      <div className='flex flex-col gap-5'>
        <label htmlFor="username" className="sr-only">Username</label>
        <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter username"
            id='username'
            onChange={(e) => usersStore.setUser("username", e.target.value )}
          />

        <label htmlFor="email" className="sr-only">Email</label>

        {pathname === '/register' && (
        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter email"
            onChange={(e) => usersStore.setUser("email", e.target.value ) }
          />

          <span className="absolute inset-y-0 right-4 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
        )}
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter password"
            onChange={(e) => usersStore.setUser("password", e.target.value )}
          />

          <span className="absolute inset-y-0 right-4 inline-flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <button
          type="button"
          className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          onClick={async () => {
            if(pathname === '/login'){
              const {email, ...rest } = state.user
              await login(rest)
            } else {
              await usersStore.createUser(state.user)
            }
          } }
        >
          {pathname === '/login' ? 'Login' : 'Register'}
        </button>
      </div>
    </form>


  )
}

export default Form