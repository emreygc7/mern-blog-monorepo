import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeIcon, LightModeIcon, ReadingListIcon, UserIcon, UsersIcon, LogoutIcon, PostIcon, CategoryIcon } from '../../utils/constants/icons'
import { userContext } from '../../context/UserContext'

type Props = {
    darkMode: boolean
    setDarkMode: (darkMode: boolean) => void
}

const links = [
    {
        name: 'Profile',
        icon: <UserIcon />,
        path: '/profile'
    },
    {
        name: 'My List',
        icon: <ReadingListIcon />,
        path: '/my-list'
    },
    {
        name: 'Write',
        icon: <PostIcon />,
        path: '/write'
    },
    {
        name: 'Categories',
        icon: <CategoryIcon />,
        path: '/categories'
    },
    {
        name: 'Users',
        icon: <UsersIcon />,
        path: '/users'
    }
]


function Header({darkMode, setDarkMode}: Props) {
    const [menuOpen, setMenuOpen] = useState(false)

    const {state, dispatch} = useContext(userContext)

  return (
    <div className='flex items-center justify-between px-4 py-2 shadow-xl bg-white text-gray-800 dark:bg-slate-900 dark:text-gray-200  '>
        <Link to="/">Blog</Link>
        <div>
            <Link to="/about">About</Link>
        </div>
        {
            state.isAuth ? (

        <div className='relative cursor-pointer'>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" className='rounded-full w-8 h-8' onClick={() => setMenuOpen(!menuOpen)} />
            {
                menuOpen && (
                    <div className='absolute right-0 w-48 bg-white dark:bg-slate-900 rounded-lg shadow-lg py-2 z-50'>
                        {
                          links.map((link, key) => (
                            <Link to={link.path} className='flex items-center gap-1 px-4 py-2 text-sm hover:bg-slate-200 dark:hover:bg-slate-700 '>
                             {link.icon}
                             <span>{link.name}</span>
                            </Link>
                          ))
                        }
                        <div className='flex items-center gap-1 px-4 py-2 text-sm hover:bg-slate-200 dark:hover:bg-slate-700'  onClick={() => setDarkMode(!darkMode)}>
                            {
                                darkMode ? (
                                    <div className='flex gap-1 items-center ' >
                                        <LightModeIcon className='w-5 h-5' />
                                        <span>Light</span>
                                    </div>
                                ) : (
                                    <div className='flex gap-1 items-center ' >
                                        <DarkModeIcon className='w-5 h-5'  />
                                        <span>Dark</span>
                                    </div>
                                )
                            }

                        </div>
                        <div className='border-t border-gray-200 dark:border-slate-700'></div>
                        <Link to="/" className='flex items-center gap-1 px-4 py-2 text-sm hover:bg-slate-200 dark:hover:bg-slate-700' onClick={() => dispatch({type: 'LOGOUT'})}>
                          <LogoutIcon />
                          <span>Logout</span>
                        </Link>
                    </div>
                )
            }
        </div>
            ) : (
                <div className='flex items-center gap-4'>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            )
        }
    </div>
  )
}

export default Header