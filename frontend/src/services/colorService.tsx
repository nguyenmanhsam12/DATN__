import api from "../config/axios";
import { FormColor } from "../interface/color";

export const GetAllColors = async()=>{
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const {data} = await api.get('/admin/colors',{
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

export const GetColorById = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.get(`/admin/colors/getDetailColor/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(data);
            return data;
        } catch (error) {
            console.log("Error while fetching color by ID:", error);
        }
    } else {
        console.log("No token found, unable to fetch color details.");
    }
};


export const AddColor = async (ColorData: FormColor) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.post(`/admin/colors/storeColor`, ColorData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(data);
            return data;
        } catch (error) {
            console.log("Error while adding color:", error);
        }
    }
};


export const EditColor = async (id: number | string, ColorData: FormColor) => {
    const token = sessionStorage.getItem('token'); 
    if (token) {
        try {
            const { data } = await api.put(`/admin/colors/updateColor/${id}`, ColorData, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            return data; 
        } catch (error) {
            console.log("Error while editing color:", error); 
        }
    }
};


export const DeleteColor = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const { data } = await api.delete(`/admin/colors/deleteColor/${id}`, {
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
  