import React, { useContext, useEffect } from 'react'
import { CategoryCT } from '../../../context/CategoryContext'
import { useForm } from 'react-hook-form'
import { FormCategories } from '../../../interface/categories'
import { useParams } from 'react-router-dom'
import { GetCategoryById } from '../../../services/categoryService'

type Props = {}

const EditCategory = (props: Props) => {
  const {onEdit} = useContext(CategoryCT)
  const {register, handleSubmit,reset} = useForm<FormCategories>()
  const params = useParams()
  useEffect(()=>{
    (async()=>{
        const category = await GetCategoryById(params?.id as string|number)
        if (category) {
            reset({
                name: category.data.category.name,
                slug: category.data.category.slug,
                parent_id: category.data.category.parent_id
            })
        }
    })()
},[])
  const onSubmit = (data:FormCategories) =>{
    onEdit(data, params.id as string|number)
} 
  return (
      <div className="container mx-auto p-6">
    <h2 className="text-2xl font-bold mb-4">Sửa Danh Mục</h2>
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
          Update Category
        </button>
      </div>
    </form>
  </div>


  )
}

export default EditCategory