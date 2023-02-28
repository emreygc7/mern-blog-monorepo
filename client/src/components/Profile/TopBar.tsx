import React from 'react'
import relativeDateAgo from '../../utils/relative-date-ago'

type TopBarProps = {
  data: {
    username: string,
    profile_pic: string,
    created_at: string
  }
}


function TopBar({data}: TopBarProps) {
  return (
    <div className='flex justify-between bg-white py-3 px-2 dark:bg-slate-900 text-gray-800 dark:text-gray-200'>
      <div className='flex gap-5 items-center'>
        <img src={data?.profile_pic} alt="profilepic" className='w-48 h-48 rounded-full' />
        <span className='text-2xl'>{data?.username}</span>
      </div>
      <div className='flex gap-2 items-center'>
      <p className='flex items-center gap-2 text-sm'>
        Date of registration: 
        <span className='text-xs opacity-60'>{relativeDateAgo(data?.created_at)}</span>
      </p>
      </div>


    </div>
  )
}

export default TopBar