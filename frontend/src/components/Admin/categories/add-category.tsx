import React, { useContext } from 'react'
import { CategoryCT } from '../../../context/CategoryContext'
import { useForm } from 'react-hook-form'
import { FormCategories } from '../../../interface/categories'

type Props = {}

const AddCategory = (props: Props) => {
  const {onAdd} = useContext(CategoryCT)
  const {register, handleSubmit} = useForm<FormCategories>()
  const onSubmit = (data:FormCategories) =>{
    onAdd(data)
  } 
  return (
      <div className="container mx-auto p-6">
    <h2 className="text-2xl font-bold mb-4">Thêm Danh Mục Mới</h2>
    <form onSubmit={handleSubmit(onSubmit)} action="/admin/categories/store" method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label 
          className="block text-gray-700 text-sm font-bold mb-2" 
          htmlFor="name">
          Tên Danh Mục
        </label>
        <input 
          {...register('name')}
          type="text" 
          id="name" 
          name="name" 
          required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="Nhập tên danh mục" 
        />
      </div>
      <div className="mb-4">
        <label 
          className="block text-gray-700 text-sm font-bold mb-2" 
          htmlFor="slug">
          Slug
        </label>
        <input 
        {...register('slug')}
          type="text" 
          id="slug" name="slug" 
          required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="Nhập slug" 
        />
      </div>
      <div className="mb-4">
        <label 
          className="block text-gray-700 text-sm font-bold mb-2" 
          htmlFor="parent_id">
          Parent ID
        </label>
        <input 
        {...register('parent_id')}
          type="number" 
          id="parent_id" 
          name="parent_id" 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="Nhập ID danh mục cha (nếu có)"
         />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Thêm Danh Mục
        </button>
      </div>
    </form>
  </div>


  )
}

export default AddCategory