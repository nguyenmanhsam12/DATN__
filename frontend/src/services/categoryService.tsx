import api from "../config/axios";
import { FormCategories } from "../interface/categories";

export const GetAllCategories = async()=>{
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const {data} = await api.get('/admin/categories',{
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

export const GetCategoryById = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.get(`/admin/categories/detail/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data);
            return data;
        } catch (error) {
            console.log("Error while fetching Category by ID:", error);
        }
    } else {
        console.log("No token found, unable to fetch category details.");
    }
};


export const AddCategory = async (CategoryData: FormCategories) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.post(`/admin/categories/store`, CategoryData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data);
            return data;
        } catch (error) {
            console.log("Error while adding Categories:", error);
        }
    }
};


export const EditCategories = async (id: number | string, CategoryData: FormCategories) => {
    const token = sessionStorage.getItem('token'); 
    if (token) {
        try {
            const { data } = await api.put(`/admin/categories/update/${id}`, CategoryData, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            return data; 
        } catch (error) {
            console.log("Error while editing category:", error); 
        }
    }
};


export const DeleteCategory = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const { data } = await api.delete(`/admin/categories/delete/${id}`, {
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
  