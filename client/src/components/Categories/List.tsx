import React, { useState } from 'react'
import { useSnapshot } from 'valtio'
import { categoriesStore } from '../../stores/categoriesStore'

function List({mutate}: any) {

  const state = useSnapshot(categoriesStore)
  const [editId, setEditId] = useState('')

  const handleEditForm = async (id: string) => {
    await state.updateCategory(id, state.category)
    mutate()
    setEditId('')    
  }


  console.log(state.category);
  
  return (
    <div className='flex flex-col gap-2'>
      {
        state.categories?.length === 0 && (
          <div className='text-center text-gray-500 dark:text-gray-400'>No categories found</div>
        )
      }
      {state.categories?.map((category: any, key: number) => (
        <div key={key} className={`flex flex-row justify-between items-center p-2 gap-5 text-gray-800 dark:text-gray-200 ${key % 2 === 0 ? 'bg-gray-100 dark:bg-slate-700' : 'bg-gray-50 dark:bg-slate-800'}`}>
          {
            editId === category._id ? (
              <input type="text" value={state.category.name} className="w-full p-2 border-gray-200 border bg-white dark:bg-slate-900 dark:border-none" onChange={(e: React.ChangeEvent<HTMLInputElement>) => state.addCategory(e.target.value)} />
            ) : (
              <span>{category.name}</span>
            )
          }
          <div className='flex gap-2'>
            {
              editId === category._id  ? (
                <>
                  <button type='button' className='px-2 py-1 bg-red-500 rounded ' onClick={() => setEditId('')}>Close</button>
                  <button type='button' className='px-2 py-1 bg-green-600 hover:bg-green-700 transition text-gray-200 rounded' onClick={() => handleEditForm(category._id)}>Save</button>
                </>
              ) : (
                <>
                  <button type='button' className='px-2 py-1 bg-red-600 hover:bg-red-700 transition text-gray-200 rounded' onClick={async () =>{ 
                    await state.deleteCategory(category._id)
                    mutate()
                  }}>Delete</button>
                  <button type='button' className='px-2 py-1 bg-indigo-400 hover:bg-indigo-600 transition text-gray-200 rounded' onClick={() => {
                    state.addCategory(category.name)
                    setEditId(category._id)
                    }}>Edit</button>
                </>
              )

            }
          
          </div>
        </div>
      ))}
              
    </div>
  )
}

export default List