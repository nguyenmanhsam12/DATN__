import api from "../config/axios";
import { Formsize } from "../interface/size";

export const GetAllSizes = async()=>{
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const {data} = await api.get('/admin/sizes',{
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

export const GetSizeById = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.get(`/admin/sizes/getDetailSize/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(data);
            return data;
        } catch (error) {
            console.log("Error while fetching size by ID:", error);
        }
    } else {
        console.log("No token found, unable to fetch size details.");
    }
};


export const AddSize = async (SizeData: Formsize) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.post(`/admin/sizes/storeSize`, SizeData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(data);
            return data;
        } catch (error) {
            console.log("Error while adding size:", error);
        }
    }
};


export const EditSize = async (id: number | string, SizeData: Formsize) => {
    const token = sessionStorage.getItem('token'); 
    if (token) {
        try {
            const { data } = await api.put(`/admin/sizes/updateSize/${id}`, SizeData, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            return data; 
        } catch (error) {
            console.log("Error while editing size:", error); 
        }
    }
};


export const DeleteSize = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const { data } = await api.delete(`/admin/sizes/deleteSize/${id}`, {
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
  