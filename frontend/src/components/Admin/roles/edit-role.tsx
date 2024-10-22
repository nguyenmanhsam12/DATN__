import React, { useContext, useEffect } from 'react'
import { RoleCT } from '../../../context/RoleContext'
import { RoleForm } from '../../../interface/role'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { GetRoleById } from '../../../services/roleService'

type Props = {}

const RoleEdit = (props: Props) => {
    const {onEdit} = useContext(RoleCT)
    const {register, handleSubmit, reset} = useForm<RoleForm>()
    const params = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        (async()=>{
            const role = await GetRoleById(params?.id as string|number)
            // console.log(role);
            
            if (role) {
                reset({
                    name: role.data.name,
                    display_name: role.data.display_name,
                })
            }
        })()
    },[])
    const onSubmit = (data:RoleForm) =>{
        onEdit(data, params.id as string|number)
        // navigate('/dashboard/list-roles')
    } 
  return (
    <div className="container mx-auto p-6">
        <h2 className="text-center text-2xl font-bold mb-4">Sửa Vai Trò</h2>
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
                Sửa Role
                </button>
            </div>
        </form>
    </div>

  )
}

export default RoleEdit