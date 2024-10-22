import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IColor, FormColor } from '../interface/color'
import { GetAllColors, DeleteColor, AddColor, EditColor } from '../services/colorService'

type Props = {
  children: React.ReactNode
}

export const colorCT = createContext({} as any)
const ColorContext = ({children}: Props) => {
  const [colors, setColor] = useState<IColor[]>([])
  const navigate = useNavigate();
  
  useEffect(() => {
      (async () => {
        const data = await GetAllColors();
        // console.log(data);
        setColor(data.data)
      })();
  }, []);
  

  const onDelete = async (id:string|number) =>{
    if (confirm('Are your sure?')) {
      try {
        const response = await DeleteColor(id)
        if (response) {
          alert('Xóa thành công.');
          const newcolors = colors.filter(color => color.id !== id);
          setColor(newcolors);
          // console.log('Mảng size sau khi xóa:', newsizes);
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
  }
  
  const onAdd = async (data: FormColor) => {
    const role = localStorage.getItem('roles');
    if (role === 'admin') {
        try {
            const color = await AddColor(data);
            if (color) {
                alert('Color added successfully.');
                setColor([...colors, color.data]);
                navigate('/dashboard/list-colors');
                // window.location.reload();
            }
        } catch (error) {
            console.log("Error while adding color:", error);
        }
    } else {
        alert('You do not have permission to add colors.');
    }
};


const onEdit = async (data: FormColor, id: number | string) => {
  try {
      const resdata = await EditColor(id, data);  
      alert('Color updated successfully.');
      
      const newColor = colors.map(color => (color.id === id) ? resdata : color);
      setColor(newColor);
      navigate('/dashboard/list-colors');
      // window.location.reload();
  } catch (error) {
      console.log("Error while editing color:", error);
  }
};

  return (
    <colorCT.Provider value={{colors,onAdd,onDelete,onEdit}}>
      {children}
    </colorCT.Provider>
  )
}

export default ColorContext