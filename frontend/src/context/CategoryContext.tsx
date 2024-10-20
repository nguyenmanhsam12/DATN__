import React, { Children, createContext, useEffect, useState } from 'react'
import { FormCategories, ICategory } from '../interface/categories'
import { useNavigate } from 'react-router-dom'
import { AddCategory, DeleteCategory, EditCategories, GetAllCategories } from '../services/categoryService'

type Props = {
    children: React.ReactNode
}


export const CategoryCT = createContext({} as any)
const CategoryContext = ({children}: Props) => {
    const[categories, setCategory] = useState<ICategory[]>([])
    const navigate = useNavigate();

    useEffect(() =>{
        (async()=>{
            const resdata = await GetAllCategories();
            // console.log(resdata);
            setCategory(resdata.data)
        })()
    },[])

    const onDelete = async(id:string|number) =>{
        if (confirm('Are your sure?')) {
            try {
              const response = await DeleteCategory(id)
              if (response) {
                alert('Xóa thành công.');
                const newscategories = categories.filter(category => category.id !== id);
                setCategory(newscategories);
                // console.log('Mảng categories sau khi xóa:', newscategories);
              }
              
            } catch (error) {
              console.log(error);
              
            }
          }
    }

    const onAdd = async (resdata: FormCategories) => {
        const role = localStorage.getItem('roles');
        if (role === 'admin') {
            try {
                const catedata = await AddCategory(resdata);
                if (catedata) {
                    alert('Size added successfully.');
                    setCategory([...categories, catedata]);
                    navigate('/dashboard/list-categories');
                    window.location.reload();
                }
            } catch (error) {
                console.log("Error while adding category:", error);
            }
        } else {
            alert('You do not have permission to add category.');
        }
    };

    const onEdit = async (resData: FormCategories, id: number | string) => {
        try {
            const resdata = await EditCategories(id, resData);  
            alert('Category updated successfully.');
            
            const newCategory = categories.map(category => (category.id === id) ? resdata : category);
            setCategory(newCategory);
            navigate('/dashboard/list-categories');
            window.location.reload();
        } catch (error) {
            console.log("Error while editing category:", error);
        }
      };
  return (
    <CategoryCT.Provider value={{categories,onDelete, onAdd, onEdit}}>
       {children}
    </CategoryCT.Provider>
  )
}

export default CategoryContext