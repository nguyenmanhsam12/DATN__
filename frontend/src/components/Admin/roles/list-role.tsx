import React, { useContext } from 'react'
import { RoleCT } from '../../../context/RoleContext'
import { Irole } from '../../../interface/role'
import { Link } from 'react-router-dom'

type Props = {}

const RoleList = (props: Props) => {
    const {roles, onDelete} = useContext(RoleCT)
    // console.log(roles);
    
  return (
    <div className="container mx-auto p-6">
    <h2 className="text-2xl font-bold mb-4">Danh Sách Vai Trò</h2>
    <div className="overflow-x-auto">
      <table className="text-center min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Tên</th>
            <th className="py-2 px-4 border-b">Tên Hiển Thị</th>
            <th className="py-2 px-4 border-b">Hành Động</th>
          </tr>
        </thead>
        <tbody>
            {roles.map((role:Irole, i:number)=>(
                <tr key={role.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{i+1}</td>
                    <td className="py-2 px-4 border-b">{role.name}</td>
                    <td className="py-2 px-4 border-b">{role.display_name}</td>
                    <td className="py-2 px-4 border-b">
                    <Link to={`/dashboard/edit-roles/${role.id}`} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</Link>
                    <button onClick={()=>onDelete(role.id)} className="ml-3 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>

  )
}

export default RoleList