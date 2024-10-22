import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormUser, IUser } from '../interface/user'
import { AddUser, DeleteUser, EditUser, GetAllUsers } from '../services/userService'


type Props = {
  children: React.ReactNode
}

export const UserCT = createContext({} as any)
const UserContext = ({children}: Props) => {
  const [users, setUser] = useState<IUser[]>([])
  const navigate = useNavigate();
  
  useEffect(() => {
      (async () => {
        const data = await GetAllUsers();
        // console.log(data);
        setUser(data.data)
      })();
  }, []);
  

  const onDelete = async (id:string|number) =>{
    if (confirm('Are your sure?')) {
      try {
        const response = await DeleteUser(id)
        if (response) {
          alert('Xóa thành công.');
          const newusers = users.filter(user => user.id !== id);
          setUser(newusers);
          // console.log('Mảng user sau khi xóa:', newusers);
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
  }
  
  const onAdd = async (data: FormUser) => {
        try {
            const user = await AddUser(data);
            if (user) {
                alert('User added successfully.');
                setUser([...users, user.data]);
                navigate('/dashboard/list-users');
                // window.location.reload();
            }
        } catch (error) {
            console.log("Error while adding user:", error);
        }
};


const onEdit = async (data: FormUser, id: number | string) => {
  try {
      const resdata = await EditUser(id, data);
      alert('User updated successfully.');
      const newRole = users.map(user => (user.id === id) ? resdata.data.id : user.id);
      console.log(users);
      setUser(newRole);
      navigate('/dashboard/list-users');
      // window.location.reload();
  } catch (error) {
      console.log("Error while editing user:", error);
  }
};

  return (
    <UserCT.Provider value={{users,onAdd,onDelete,onEdit}}>
      {children}
    </UserCT.Provider>
  )
}

export default UserContext