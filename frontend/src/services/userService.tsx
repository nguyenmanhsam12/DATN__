import api from "../config/axios";
import { FormUser } from "../interface/user";

export const GetAllUsers = async()=>{
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const {data} = await api.get('/admin/users',{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            return data;
        } catch (error) {
            console.log(error);
        } 
    }
    
}

export const GetUserById = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.get(`/admin/users/detail-user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(data);
            return data;
        } catch (error) {
            console.log("Error while fetching user by ID:", error);
        }
    } else {
        console.log("No token found, unable to fetch user details.");
    }
};


export const AddUser = async (userData: FormUser) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.post(`/admin/users/add-user`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(data);
            return data;
        } catch (error) {
            console.log("Error while adding user:", error);
        }
    }
};


export const EditUser = async (id: number | string, userData: FormUser) => {
    const token = sessionStorage.getItem('token'); 
    if (token) {
        try {
            const { data } = await api.put(`/admin/users/update-user/${id}`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            return data; 
        } catch (error) {
            console.log("Error while editing user:", error); 
        }
    }
};


export const DeleteUser = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const { data } = await api.delete(`/admin/users/detail-user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  };
  