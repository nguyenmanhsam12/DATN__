import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Irole, RoleForm } from '../interface/role'
import { AddRole, DeleteRole, EditRole, GetAllRoles } from '../services/roleService'

type Props = {
  children: React.ReactNode
}

export const RoleCT = createContext({} as any)
const RoleContext = ({children}: Props) => {
  const [roles, setRole] = useState<Irole[]>([])
  const navigate = useNavigate();
  
  useEffect(() => {
      (async () => {
        const data = await GetAllRoles();
        // console.log(data);
        setRole(data.data)
      })();
  }, []);
  

  const onDelete = async (id:string|number) =>{
    if (confirm('Are your sure?')) {
      try {
        const response = await DeleteRole(id)
        if (response) {
          alert('Xóa thành công.');
          const newroles = roles.filter(role => role.id !== id);
          setRole(newroles);
          // console.log('Mảng role sau khi xóa:', newroles);
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
  }
  
  const onAdd = async (data: RoleForm) => {
        try {
            const role = await AddRole(data);
            if (role) {
                alert('Role added successfully.');
                setRole([...roles, role.data]);
                navigate('/dashboard/list-roles');
                // window.location.reload();
            }
        } catch (error) {
            console.log("Error while adding role:", error);
        }
};


const onEdit = async (data: RoleForm, id: number | string) => {
  try {
      const resdata = await EditRole(id, data);
      alert('Role updated successfully.');
      const newRole = roles.map(role => (role.id === id) ? resdata.data : role);
      console.log(roles);
      setRole(newRole);
      navigate('/dashboard/list-roles');
      // window.location.reload();
  } catch (error) {
      console.log("Error while editing role:", error);
  }
};

  return (
    <RoleCT.Provider value={{roles,onAdd,onDelete,onEdit}}>
      {children}
    </RoleCT.Provider>
  )
}

export default RoleContext