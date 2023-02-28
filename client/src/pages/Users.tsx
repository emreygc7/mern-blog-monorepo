import React, { useEffect } from 'react'
import LoadingPage from '../components/common/LoadingPage'
import useFetch from '../hooks/useFetch'
import { usersStore } from '../stores/usersStore'
import { useSnapshot } from 'valtio'
import List from '../components/Users/List'
import { delete_user } from '../api/user'
import toast from 'react-hot-toast'

function Users() {

  const state = useSnapshot(usersStore)

  const {
    data: UsersData,
    isLoading: UsersIsLoading,
    error: UsersError,
    mutate
  } = useFetch('/users')

  useEffect(() => {
    if(UsersData){
      usersStore.users = UsersData
    }
  },[UsersData])

  console.log("USERRRRRRRRS" , state.users);

  const removeUser = async (id: string) => {
    try{
      const response = await delete_user(id)
      if(response.status === 200) {
        console.log(response)
        toast.success('User deleted')
        mutate()
      }
    }catch(e){
      console.log(e);
    }
  }
  
  if(UsersIsLoading) return <LoadingPage />
  if(UsersError) return <div>Error.</div>
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-2xl bg-white py-3 px-2'>Users</h1>
      <List removeUser={removeUser}/> 
    </div>
  )
}

export default Users