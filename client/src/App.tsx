import React from 'react'
import Routes from './Routes';
import UserContextProvider from './context/UserContext'

function App() {

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
