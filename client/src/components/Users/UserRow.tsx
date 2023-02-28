import React from 'react'
import { delete_user } from '../../api/user'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

type UserRowProps = {
    _id: string,
    username: string,
    email: string,
    profile_pic: string
}

function UserRow({user, removeUser}: {user: UserRowProps, removeUser: <Promise> (id: string) => any}, ) {
  return (
    <div className='flex justify-between text-gray-800 dark:text-gray-200 bg-white px-2 py-1 dark:bg-slate-900'>
      <Link to={`/user/${user._id}`} className='flex gap-2 items-center'>
        <img src={user.profile_pic} alt="profilepic" className='w-12 h-12'/>
        <span>{user.username}</span>
      </Link>
      <div className='flex gap-2 items-center'>
        <span className='text-xs opacity-60'>{user.email}</span>
        <button type='button' onClick={async () => await removeUser(user._id)} className="bg-red-600 px-2 rounded text-white">Delete</button>
      </div>
    </div>
  )
}

export default UserRow