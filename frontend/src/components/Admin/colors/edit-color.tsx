import React, { useContext, useEffect } from 'react'
import { colorCT } from '../../../context/ColorContext'
import { useForm } from 'react-hook-form'
import { FormColor } from '../../../interface/color'
import { useParams } from 'react-router-dom'
import { GetColorById } from '../../../services/colorService'

type Props = {}

const EditColor = (props: Props) => {
    const {onEdit} = useContext(colorCT)
    const {register, handleSubmit, reset} = useForm<FormColor>()
    const params = useParams()
    useEffect(()=>{
        (async()=>{
            const color = await GetColorById(params?.id as string|number)
            if (color) {
                reset({
                    color:color.data.color
                })
            }
        })()
    },[])
    const onSubmit = (data:FormColor) =>{
        onEdit(data, params.id as string|number)
    } 
  return (
    <div>
        <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Edit Color</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="mb-4">
                    <label htmlFor="size" className="block text-gray-700 mb-2">Color:</label>
                    <input  type="text" id="size" {...register('color')} required className="border border-gray-300 p-2 w-full rounded" />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Update Color
                </button>
            </form>
        </div>
    </div>
  )
}

export default EditColor