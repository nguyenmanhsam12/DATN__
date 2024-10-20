import api from "../config/axios";
import { FormBrand } from "../interface/brand";

export const GetAllBrands = async()=>{
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const {data} = await api.get('/admin/brands',{
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

export const GetBrandById = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.get(`/admin/brands/getDetailBrand/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data);
            return data;
        } catch (error) {
            console.log("Error while fetching Brand by ID:", error);
        }
    } else {
        console.log("No token found, unable to fetch Brand details.");
    }
};


export const AddBrand = async (BrandData: FormBrand) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.post(`/admin/brands/store`, BrandData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data);
            return data;
        } catch (error) {
            console.log("Error while adding Brand:", error);
        }
    }
};


export const EditBrand = async (id: number | string, BrandData: FormBrand) => {
    const token = sessionStorage.getItem('token'); 
    if (token) {
        try {
            const { data } = await api.put(`/admin/brands/updateBrand/${id}`, BrandData, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            return data; 
        } catch (error) {
            console.log("Error while editing Brand:", error); 
        }
    }
};


export const DeleteBrand = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const { data } = await api.delete(`/admin/brands/deleteBrand/${id}`, {
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
  