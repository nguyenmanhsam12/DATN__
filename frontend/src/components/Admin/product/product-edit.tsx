import React, { useContext, useEffect } from 'react'
import { ProductCT } from '../../../context/ProductContext'
import { useForm } from 'react-hook-form'
import { FormProduct } from '../../../interface/product'
import { CategoryCT } from '../../../context/CategoryContext'
import { BrandCT } from '../../../context/BrandContext'
import { IBrand } from '../../../interface/brand'
import { ICategory } from '../../../interface/categories'
import { useParams } from 'react-router-dom'
import { GetSizeById } from '../../../services/sizeService'
import { GetProductById } from '../../../services/productService'

type Props = {}

const ProductEdit = (props: Props) => {
    const {onEdit} = useContext(ProductCT)
    const {register, handleSubmit,reset} = useForm<FormProduct>()
    const {categories} = useContext(CategoryCT)
    const {brands} = useContext(BrandCT)
    const params = useParams()
    useEffect(()=>{
        (async()=>{
            const product = await GetProductById(params?.id as string|number)
            if (product) {
                reset({
                    name: product.data.name,
                    description: product.data.description,
                    brand_id: product.data.brand_id,
                    category_id: product.data.category_id,
                })
            }
        })()
    },[])

    const onSubmit = (data:FormProduct) =>{
        onEdit(data, params.id as string|number)
      }
  return (
    <div className="container mx-auto px-4 py-6">
    <h1 className="text-2xl font-semibold mb-6">Add Product</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 border border-gray-300 rounded-md shadow-md">
      
      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
        {...register('name')}
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Slug Field
      <div className="mb-4">
        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
          Slug
        </label>
        <input

          type="text"
          id="slug"
          name="slug"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div> */}

      {/* Description Field */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
        {...register('description')}
          id="description"
          name="description"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Brand ID Field */}
        <div className="mb-4">
        <label htmlFor="brand_id" className="block text-sm font-medium text-gray-700">
            Brand
        </label>
        <select
        {...register('brand_id')}
            id="brand_id"
            name="brand_id"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
            <option value="">Select a Brand</option>
            {brands.map((brand:IBrand,i:number)=>(
                <option key={i} value={brand.id}>{brand.name}</option>
            ))}
            
            {/* <option value="2">Brand 2</option> */}
            {/* <option value="3">Brand 3</option> */}
            {/* Add more options as needed */}
        </select>
        </div>

        {/* Category ID Field */}
        <div className="mb-4">
        <label htmlFor="category_id" className="block text-sm font-medium text-gray-700">
            Category
        </label>
        <select
        {...register('category_id')}
            id="category_id"
            name="category_id"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
            <option value="">Select a Category</option>
            {categories.map((category:ICategory,i:number)=>(
                <option key={i} value={category.id}>{category.name}</option>
            ))}
            {/* <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option> */}
            {/* Add more options as needed */}
        </select>
        </div>


      {/* Submit Button */}
      <div className="text-right">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Save Product
        </button>
      </div>
    </form>
  </div>
  )
}

export default ProductEdit