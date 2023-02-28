import React from 'react'
import { usersStore } from '../../stores/usersStore'
import { useSnapshot } from 'valtio'
import UserRow from './UserRow'



function List({removeUser}: {removeUser: <Promise> (id: string) => any}) {
  const state = useSnapshot(usersStore)

  return (
    <div className='flex flex-col gap-2'>
      {state.users.map((user: any, key: number) => (
        <UserRow key={key} user={user} removeUser={removeUser} />
      ))}
    </div>
  )
}

export default List