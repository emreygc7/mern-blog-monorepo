import React, { useState } from 'react'
import { OpenIcon, CloseIcon } from '../../utils/constants/icons'
import { categoriesStore } from '../../stores/categoriesStore'
import { useSnapshot } from 'valtio'

function Form({mutate}:any) {

  const [openForm, setOpenForm] = useState(false)
  const state = useSnapshot(categoriesStore)

  

  return (
    <div className='flex flex-col gap-3 items-start'>
      <button className="bg-white text-gray-800 dark:bg-slate-700 dark:text-gray-200 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 flex items-center transition self-end" onClick={() => setOpenForm(!openForm)}>
        <span className="mr-2">{openForm ? 'Close the add form' : 'Open the add form'}</span>
        {openForm ? <CloseIcon /> : <OpenIcon />}
      </button>
      {
        openForm && (
          <div className='flex w-full justify-between items-center gap-5'>
            <label
              className="block flex-1 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <span className="text-xs font-medium text-gray-700 dark:text-gray-200"> Category Name </span>

              <input
                type="text"
                placeholder="Name"
                className="mt-1 bg-transparent w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-800 dark:text-gray-200"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => state.addCategory(e.target.value)}
                value={state.category.name}
              />
            </label>
            <button type='button' className='px-5 py-1 bg-green-600 hover:bg-green-700 transition text-gray-200 rounded' onClick={async () => { 
              await state.createCategory(state.category)
              mutate()
              }}>Add</button>
          </div>
        )
      }
    </div>
  )
}

export default Form