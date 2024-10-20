import React, { useContext } from 'react'
import { BrandCT } from '../../../context/BrandContext'
import { useForm } from 'react-hook-form'
import { FormBrand } from '../../../interface/brand'

type Props = {}

const AddBrand = (props: Props) => {
    const {onAdd} = useContext(BrandCT)
    const {register, handleSubmit} = useForm<FormBrand>()
    const onSubmit = (data:FormBrand) =>{
        onAdd(data)
    } 
  return (
    <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Thêm Thương Hiệu Mới</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 border rounded-lg shadow-md" >
            <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Tên Thương Hiệu:</label>
            <input {...register('name')} type="text" id="name" name="name" required className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500" />
            </div>
            <div className="mb-4">
            <label htmlFor="slug" className="block text-gray-700 mb-2">Slug:</label>
            <input {...register('slug')} type="text" id="slug" name="slug" required className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-500" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Thêm Thương Hiệu
            </button>
        </form>
    </div>

  )
}

export default AddBrand