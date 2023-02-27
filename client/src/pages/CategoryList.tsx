import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useSnapshot } from 'valtio'
import { categoriesStore } from '../stores/categoriesStore'
import Form from '../components/Categories/Form'
import List from '../components/Categories/List'
import LoadingPage from '../components/common/LoadingPage'

function CategoryList() {

  const {
    data: CategoriesData,
    isLoading: CategoriesIsLoading,
    error: CategoriesError,
    mutate
  } = useFetch('/categories')

  const state = useSnapshot(categoriesStore)

  
  useEffect(() => {
    if(CategoriesData) {
       state.setCategories(CategoriesData)
    }
  },[CategoriesData])


  if(CategoriesIsLoading) return <LoadingPage />
  if(CategoriesError) return <div>Error...</div>  
  return (
    <div className='flex flex-col gap-2 bg-white dark:bg-slate-900 px-2 py-3'>
      <Form mutate={mutate} />
      <hr />
      <h1 className='text-xl font-bold'>Categories</h1>
      <List mutate={mutate} />
    </div>
  )
}

export default CategoryList