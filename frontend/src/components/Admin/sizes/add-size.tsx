import React, { useContext } from 'react'
import { SizeCT } from '../../../context/SizeContext'
import { useForm } from 'react-hook-form'
import { Formsize } from '../../../interface/size'

type Props = {}

const AddSize = (props: Props) => {
    const {onAdd} = useContext(SizeCT)
    const {register, handleSubmit} = useForm<Formsize>()
    const onSubmit = (data:Formsize) =>{
        onAdd(data)
    } 
  return (
    <div>
        <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Add Size</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="mb-4">
                    <label htmlFor="size" className="block text-gray-700 mb-2">Size:</label>
                    <input  type="text" id="size" {...register('size')} required className="border border-gray-300 p-2 w-full rounded" />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Size
                </button>
            </form>
        </div>
    </div>
  )
}

export default AddSize