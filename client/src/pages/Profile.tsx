import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

function Profile() {
  const { id } = useParams<{id: string}>()
  console.log(id);
  
  const { 
    data: UserData,
    isLoading: UserIsLoading, 
    error: UserError,
    mutate
  } = useFetch(`/users/${id}`)
  
  return (
    <div>Profile</div>
  )
}

export default Profile