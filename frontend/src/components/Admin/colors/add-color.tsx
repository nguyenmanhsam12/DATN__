import React, { useContext } from 'react'
import { colorCT } from '../../../context/ColorContext'
import { useForm } from 'react-hook-form'
import { FormColor } from '../../../interface/color'

type Props = {}

const AddColor = (props: Props) => {
    const {onAdd} = useContext(colorCT)
    const {register, handleSubmit} = useForm<FormColor>()
    const onSubmit = (data:FormColor) =>{
        onAdd(data)
    } 
  return (
    <div>
        <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Add Color</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="mb-4">
                    <label htmlFor="size" className="block text-gray-700 mb-2">Color:</label>
                    <input  type="text" id="size" {...register('color')} required className="border border-gray-300 p-2 w-full rounded" />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Color
                </button>
            </form>
        </div>
    </div>
  )
}

export default AddColor