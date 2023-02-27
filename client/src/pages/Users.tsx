import React from 'react'

function Users() {
  return (
    <ul className="flex border-b border-gray-200 text-center">
  <li className="flex-1 cursor-pointer">
    <span 
      className="relative block border-t border-l border-r border-gray-200 bg-white p-4 text-sm font-medium"
    >
      <span className="absolute inset-x-0 -bottom-px h-px w-full bg-white"></span>

      All
    </span>
  </li>

  <li className="flex-1">
    <span 
      className="block bg-gray-100 p-4 text-sm font-medium text-gray-500 ring-1 ring-inset ring-white"
    >
      Messages
    </span>
  </li>

  <li className="flex-1">
    <span 
      className="block bg-gray-100 p-4 text-sm font-medium text-gray-500 ring-1 ring-inset ring-white"
    >
      Archive
    </span>
  </li>

  <li className="flex-1">
    <span 
      className="block bg-gray-100 p-4 text-sm font-medium text-gray-500 ring-1 ring-inset ring-white"
    >
      Notifications
    </span>
  </li>
</ul>

  )
}

export default Users