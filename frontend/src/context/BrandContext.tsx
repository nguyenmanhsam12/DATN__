import React, { Children, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormBrand, IBrand } from '../interface/brand'
import { AddBrand, DeleteBrand, EditBrand, GetAllBrands } from '../services/brandService'
type Props = {
    children: React.ReactNode
}


export const BrandCT = createContext({} as any)
const BrandContext = ({children}: Props) => {
    const[brands, setBrand] = useState<IBrand[]>([])
    const navigate = useNavigate();

    useEffect(() =>{
        (async()=>{
            const resdata = await GetAllBrands();
            // console.log(resdata);
            setBrand(resdata.data)
        })()
    },[])

    const onDelete = async(id:string|number) =>{
        if (confirm('Are your sure?')) {
            try {
              const response = await DeleteBrand(id)
              if (response) {
                alert('Xóa thành công.');
                const newsbrands = brands.filter(brand => brand.id !== id);
                setBrand(newsbrands);
                // console.log('Mảng brands sau khi xóa:', newsbrands);
              }
              
            } catch (error) {
              console.log(error);
              
            }
          }
    }

    const onAdd = async (resdata: FormBrand) => {
        const role = localStorage.getItem('roles');
        if (role === 'admin') {
            try {
                const brandata = await AddBrand(resdata);
                if (brandata) {
                    alert('Brand added successfully.');
                    setBrand([...brands, brandata]);
                    navigate('/dashboard/list-brands');
                    window.location.reload();
                }
            } catch (error) {
                console.log("Error while adding brand:", error);
            }
        } else {
            alert('You do not have permission to add brand.');
        }
    };

    const onEdit = async (resData: FormBrand, id: number | string) => {
        try {
            const resdata = await EditBrand(id, resData);  
            alert('Category updated successfully.');
            
            const newbrand = brands.map(brand => (brand.id === id) ? resdata : brand);
            setBrand(newbrand);
            navigate('/dashboard/list-brands');
            window.location.reload();
        } catch (error) {
            console.log("Error while editing brand:", error);
        }
      };
  return (
    <BrandCT.Provider value={{brands, onDelete, onAdd, onEdit}}>
        {children}
    </BrandCT.Provider>
  )
}

export default BrandContext