import React, { createContext, useEffect, useState } from 'react'
import { Formsize, Sizes } from '../interface/size'
import { useNavigate } from 'react-router-dom'
import { AddSize, DeleteSize, EditSize, GetAllSizes } from '../services/sizeService'

type Props = {
  children: React.ReactNode
}

export const SizeCT = createContext({} as any)
const SizeContext = ({children}: Props) => {
  const [sizes, setSize] = useState<Sizes[]>([])
  const navigate = useNavigate();
  
  useEffect(() => {
    const role = localStorage.getItem('roles');
    if (role === 'admin') {
      (async () => {
        const data = await GetAllSizes();
        // console.log(data);
        setSize(data.data)
      })();
    }
  }, []);
  

  const onDelete = async (id:string|number) =>{
    if (confirm('Are your sure?')) {
      try {
        const response = await DeleteSize(id)
        if (response) {
          alert('Xóa thành công.');
          const newsizes = sizes.filter(size => size.id !== id);
          setSize(newsizes);
          // console.log('Mảng size sau khi xóa:', newsizes);
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
  }
  
  const onAdd = async (data: Formsize) => {
    const role = localStorage.getItem('roles');
    if (role === 'admin') {
        try {
            const size = await AddSize(data);
            if (size) {
                alert('Size added successfully.');
                setSize([...sizes, size]);
                navigate('/dashboard/list-sizes');
                window.location.reload();
            }
        } catch (error) {
            console.log("Error while adding size:", error);
        }
    } else {
        alert('You do not have permission to add sizes.');
    }
};


const onEdit = async (data: Formsize, id: number | string) => {
  try {
      const resdata = await EditSize(id, data);  
      alert('Size updated successfully.');
      
      const newSize = sizes.map(size => (size.id === id) ? resdata : size);
      setSize(newSize);
      navigate('/dashboard/list-sizes');
      window.location.reload();
  } catch (error) {
      console.log("Error while editing size:", error);
  }
};

  return (
    <SizeCT.Provider value={{sizes,onAdd,onDelete,onEdit}}>
      {children}
    </SizeCT.Provider>
  )
}

export default SizeContext