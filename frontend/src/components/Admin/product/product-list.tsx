import React, { useContext } from 'react'
import { ProductCT } from '../../../context/ProductContext'
import { IProduct } from '../../../interface/product'
import { Link } from 'react-router-dom'

type Props = {}

const ProductList = (props: Props) => {
    const {products, onDelete} = useContext(ProductCT)
  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Slug</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Brand</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">User</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {products.map((product: IProduct, i:number)=>(
              <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{i+1}</td>
                <td className="py-3 px-6 text-left">{product.name}</td>
                <td className="py-3 px-6 text-left">{product.slug}</td>
                <td className="py-3 px-6 text-left">{product.description}</td>
                <td className="py-3 px-6 text-left">{product.brand.name}</td>
                <td className="py-3 px-6 text-left">{product.category.name}</td>
                <td className="py-3 px-6 text-left">{product.user.name}</td>
                <td className="py-2 px-4 border-b">
                    <Link to={`/dashboard/edit-products/${product.id}`} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</Link>
                    <button onClick={()=>onDelete(product.id)} className="ml-3 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
           ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductList