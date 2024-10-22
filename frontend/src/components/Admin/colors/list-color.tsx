import React, { useContext } from 'react'
import { colorCT } from '../../../context/ColorContext'
import { IColor } from '../../../interface/color'
import { Link } from 'react-router-dom'

type Props = {}

const ListColor = (props: Props) => {
    const {colors, onDelete} = useContext(colorCT)
  return (
    <div>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Color</th>
                            <th className="border border-gray-300 px-4 py-2">Created At</th>
                            <th className="border border-gray-300 px-4 py-2">Updated At</th>
                            <th className="border border-gray-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {colors.map((color: IColor, i: number) => (
                            <tr key={color.id}>
                                <td className="border border-gray-300 px-4 py-2">{i + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{color.color}</td>
                                <td className="border border-gray-300 px-4 py-2">{color.created_at ? String(color.created_at) : 'Không có'}</td>
                                <td className="border border-gray-300 px-4 py-2">{color.updated_at ? String(color.updated_at) : 'Không có'}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <Link to={`/dashboard/edit-colors/${color.id}`} className="bg-yellow-400 text-white px-2 py-1 rounded">Edit</Link>
                                    <button onClick={()=> onDelete(color.id)} className=" ml-3 bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default ListColor