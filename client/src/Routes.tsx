import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes as AllRoutes, Route } from 'react-router-dom'
import Default from './layouts/Default'
import LoadingPage from './components/common/LoadingPage'

const Register = lazy(() => import('./pages/Register'))
const Login = lazy(() => import('./pages/Login'))
const CategoryList = lazy(() => import('./pages/CategoryList'))
const Users = lazy(() => import('./pages/Users'))
const Profile = lazy(() => import('./pages/Profile'))


function Routes() {
  return (
    <BrowserRouter>
      <AllRoutes>  
          
        <Route path="/" element={
          <Default>
          </Default>
        } />

        <Route path="/about" element={
        <Default>
          <div>About</div>
        </Default>
        } />

        <Route path="/categories" element={
          <Default>
            <Suspense fallback={<LoadingPage />}>
              <CategoryList />
            </Suspense>
          </Default>
        } />

        <Route path="/register" element={
          <Suspense fallback={<LoadingPage />}>
            <Register />
          </Suspense>
        } />            

        <Route path="/login" element={ 
          <Suspense fallback={<LoadingPage />}>
            <Login />
          </Suspense>
        } />

        <Route path='/users' element={
          <Default>
            <Suspense fallback={<LoadingPage />}>
              <Users />
            </Suspense>
          </Default>
        } />

        <Route path="/user/:id" element={
          <Default>
            <Suspense fallback={<LoadingPage />}>
              <Profile />
            </Suspense>
          </Default>
        } />


        
        
          
      </AllRoutes>
    </BrowserRouter>
  )
}

export default Routes