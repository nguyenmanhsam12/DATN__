import React, { Children, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormVariant, IVariant } from '../interface/variant'
import { AddVariant, DeleteVariant, EditVariant, GetAllVariants } from '../services/variantService'

type Props = {
    children: React.ReactNode
}


export const VariantCT = createContext({} as any)
const VariantContext = ({children}: Props) => {
    const[variants, setVariant] = useState<IVariant[]>([])
    const navigate = useNavigate();

    useEffect(() =>{
        (async()=>{
            const resdata = await GetAllVariants();
            // console.log(resdata);
            setVariant(resdata.data)
        })()
    },[])

    const onDelete = async(id:string|number) =>{
        if (confirm('Are your sure?')) {
            try {
              const response = await DeleteVariant(id)
              if (response) {
                alert('Xóa thành công.');
                const newvariants = variants.filter(variant => variant.id !== id);
                setVariant(newvariants);
                // console.log('Mảng products sau khi xóa:', newvariants);
              }
              
            } catch (error) {
              console.log(error);
              
            }
          }
    }

    const onAdd = async (resdata: FormVariant) => {
            try {
                const variantData = await AddVariant(resdata);
                if (variantData) {
                    alert('Variant added successfully.');
                    setVariant([...variants, variantData.data]);
                    navigate('/dashboard/list-variants');
                    // window.location.reload();
                }
            } catch (error) {
                console.log("Error while adding variant:", error);
            }
    };

    const onEdit = async (resData: FormVariant, id: number | string) => {
        try {
            const resdata = await EditVariant(id, resData);  
            alert('variant updated successfully.');
            
            const newVariant = variants.map(variant => (variant.id === id) ? resdata : variant);
            setVariant(newVariant);
            // navigate('/dashboard/list-variants');
            // window.location.reload();
        } catch (error) {
            console.log("Error while editing product:", error);
        }
      };
  return (
    <VariantCT.Provider value={{variants,onDelete, onAdd, onEdit}}>
       {children}
    </VariantCT.Provider>
  )
}

export default VariantContext