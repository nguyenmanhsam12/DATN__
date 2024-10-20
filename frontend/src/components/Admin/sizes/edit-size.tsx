import React, { useContext, useEffect } from 'react'
import { SizeCT } from '../../../context/SizeContext'
import { useForm } from 'react-hook-form'
import { Formsize } from '../../../interface/size'
import { useParams } from 'react-router-dom'
import { GetSizeById } from '../../../services/sizeService'

type Props = {}

const EditSize = (props: Props) => {
    const {onEdit} = useContext(SizeCT)
    const {register, handleSubmit, reset} = useForm<Formsize>()
    const params = useParams()
    useEffect(()=>{
        (async()=>{
            const size = await GetSizeById(params?.id as string|number)
            if (size) {
                reset({
                    size:size.data.size
                })
            }
        })()
    },[])
    const onSubmit = (data:Formsize) =>{
        onEdit(data, params.id as string|number)
    } 
  return (
    <div>
        <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Edit Size</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="mb-4">
                    <label htmlFor="size" className="block text-gray-700 mb-2">Size:</label>
                    <input  type="text" id="size" {...register('size')} required className="border border-gray-300 p-2 w-full rounded" />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Update Size
                </button>
            </form>
        </div>
    </div>
  )
}

export default EditSize