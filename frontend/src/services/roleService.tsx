import api from "../config/axios";
import { RoleForm } from "../interface/role";

export const GetAllRoles = async()=>{
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const {data} = await api.get('/admin/roles',{
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

export const GetRoleById = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.get(`/admin/roles/getDetailRole/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(data);
            return data;
        } catch (error) {
            console.log("Error while fetching role by ID:", error);
        }
    } else {
        console.log("No token found, unable to fetch role details.");
    }
};


export const AddRole = async (roleData: RoleForm) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.post(`/admin/roles/storeRoles`, roleData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(data);
            return data;
        } catch (error) {
            console.log("Error while adding role:", error);
        }
    }
};


export const EditRole = async (id: number | string, RoleData: RoleForm) => {
    const token = sessionStorage.getItem('token'); 
    if (token) {
        try {
            const { data } = await api.put(`/admin/roles/updateRoles/${id}`, RoleData, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            return data; 
        } catch (error) {
            console.log("Error while editing role:", error); 
        }
    }
};


export const DeleteRole = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const { data } = await api.delete(`/admin/roles/deleteRole/${id}`, {
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
  