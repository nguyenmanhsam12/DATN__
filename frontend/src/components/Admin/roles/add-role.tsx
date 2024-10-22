import React, { useContext } from 'react'
import { RoleCT } from '../../../context/RoleContext'
import { RoleForm } from '../../../interface/role'
import { useForm } from 'react-hook-form'

type Props = {}

const RoleAdd = (props: Props) => {
    const {onAdd} = useContext(RoleCT)
    const {register, handleSubmit} = useForm<RoleForm>()
    const onSubmit = (data:RoleForm) =>{
        onAdd(data)
    } 
  return (
    <div className="container mx-auto p-6">
        <h2 className="text-center text-2xl font-bold mb-4">Thêm Vai Trò Mới</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto max-w-lg bg-white p-8 rounded shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Role Name
                </label>
                <input {...register('name')} type="text" id="name" name="name" placeholder="Enter role name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="display_name">
                Display Name
                </label>
                <input {...register('display_name')} type="text" id="display_name" name="display_name" placeholder="Enter display name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add Role
                </button>
            </div>
        </form>
    </div>

  )
}

export default RoleAdd