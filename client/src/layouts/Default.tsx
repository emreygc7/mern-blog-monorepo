import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import { Toaster } from 'react-hot-toast'

type Props = {
    children: React.ReactNode
}

function Default({children}: Props) {
    const [darkMode, setDarkMode] = useState(false)
    
    useEffect(() => {
       setDarkMode(localStorage.getItem('darkMode') === 'true') 
   }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('darkMode', 'false');
        }
    }, [darkMode])

    

  return (
    <div className='flex flex-col gap-2 w-3/4 m-auto'>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Toaster />
        {children}
    </div>
  )
}

export default Default