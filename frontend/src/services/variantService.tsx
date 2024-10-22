import api from "../config/axios";
import { FormVariant } from "../interface/variant";

export const GetAllVariants = async()=>{
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const {data} = await api.get('/admin/variants/',{
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

export const GetVariantById = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.get(`/admin/variants/getDetailVariant/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data);
            return data;
        } catch (error) {
            console.log("Error while fetching Variant by ID:", error);
        }
    } else {
        console.log("No token found, unable to fetch variant details.");
    }
};


export const AddVariant = async (VariantData: FormVariant) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.post(`/admin/variants/storeVariant`, VariantData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(data);
            return data;
        } catch (error) {
            console.log("Error while adding Variants:", error);
        }
    }
};


export const EditVariant = async (id: number | string, VariantData: FormVariant) => {
    const token = sessionStorage.getItem('token'); 
    if (token) {
        try {
            const { data } = await api.put(`/admin/variants/updateVariant/${id}`, VariantData, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            return data; 
        } catch (error) {
            console.log("Error while editing Variant:", error); 
        }
    }
};


export const DeleteVariant = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const { data } = await api.delete(`/admin/variants/deleteVariant/${id}`, {
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
  