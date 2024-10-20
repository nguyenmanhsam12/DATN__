import React, { useContext } from 'react'
import { BrandCT } from '../../../context/BrandContext'
import { IBrand } from '../../../interface/brand'
import { Link } from 'react-router-dom'

type Props = {}

const ListBrand = (props: Props) => {
    const {brands, onDelete} = useContext(BrandCT)
  return (
    <div className="container mx-auto p-6">
    <h2 className="text-2xl font-bold mb-4">Danh Sách Danh Mục</h2>
    <div className="overflow-x-auto">
      <table className="text-center min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Tên</th>
            <th className="py-2 px-4 border-b">Slug</th>
            <th className="py-2 px-4 border-b">Ngày Tạo</th>
            <th className="py-2 px-4 border-b">Ngày Cập Nhật</th>
            <th className="py-2 px-4 border-b">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand: IBrand, i:number)=>(
              <tr key={brand.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{i+1}</td>
                <td className="py-2 px-4 border-b">{brand.name}</td>
                <td className="py-2 px-4 border-b">{brand.slug}</td>
                <td className="py-2 px-4 border-b">{brand.created_at ? String(brand.created_at) : 'Không có'}</td>
                <td className="py-2 px-4 border-b">{brand.updated_at ? String(brand.updated_at) : 'Không có'}</td>
                <td className="py-2 px-4 border-b">
                  <Link to={`/dashboard/edit-brands/${brand.id}`} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Edit</Link>
                  <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Copy</button>
                  <button onClick={()=>onDelete(brand.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  )
}

export default ListBrand