import React, { useContext } from 'react'
import { VariantCT } from '../../../context/VariantContext'
import { IVariant } from '../../../interface/variant'
import { Link } from 'react-router-dom'

type Props = {}

const VariantList = (props: Props) => {
    const {variants, onDelete} = useContext(VariantCT)
    console.log(variants);
    
  return (
    <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Product ID</th>
                        <th className="py-2 px-4 border-b">Size ID</th>
                        <th className="py-2 px-4 border-b">Color ID</th>
                        <th className="py-2 px-4 border-b">SKU</th>
                        <th className="py-2 px-4 border-b">Stock</th>
                        <th className="py-2 px-4 border-b">Selled</th>
                        <th className="py-2 px-4 border-b">Price</th>
                        <th className="py-2 px-4 border-b">Created At</th>
                        <th className="py-2 px-4 border-b">Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    {variants.map((variant:IVariant,i:number)=>(
                    <tr key={variant.id} className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b">{i+1}</td>
                        <td className="py-2 px-4 border-b">{variant.product_id}</td>
                        <td className="py-2 px-4 border-b">{variant.size_id}</td>
                        <td className="py-2 px-4 border-b">{variant.color_id}</td>
                        <td className="py-2 px-4 border-b">{variant.sku}</td>
                        <td className="py-2 px-4 border-b">{variant.stock}</td>
                        <td className="py-2 px-4 border-b">{variant.selled}</td>
                        <td className="py-2 px-4 border-b">${variant.price}</td>
                        <td className="py-2 px-4 border-b">{variant.created_at ? String(variant.created_at) : 'Không có'}</td>
                        <td className="py-2 px-4 border-b">{variant.updated_at ? String(variant.updated_at) : 'Không có'}</td>
                        <td className="py-2 px-4 border-b">
                            <Link to={`/dashboard/edit-variants/${variant.id}`} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</Link>
                            <button onClick={()=>onDelete(variant.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                        </td>
                    </tr>
                     ))}
                </tbody>
            </table>
        </div>
  )
}

export default VariantList