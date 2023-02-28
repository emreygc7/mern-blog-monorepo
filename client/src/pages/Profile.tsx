import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import TopBar from '../components/Profile/TopBar';
import LoadingPage from '../components/common/LoadingPage';

function Profile() {
  const { id } = useParams<{id: string}>()
  
  const { 
    data: UserData,
    isLoading: UserIsLoading, 
    error: UserError,
    mutate
  } = useFetch(`/users/${id}`)

  if (UserIsLoading) return <LoadingPage />
  if (UserError) return <div>Error</div>
  return (
    <div>
      <TopBar data={UserData}  />
    </div>
  )
}

export default Profile