import api from "../config/axios";
import { FormProduct } from "../interface/product";

export const GetAllProduct = async()=>{
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const {data} = await api.get('/admin/products',{
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

export const GetProductById = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.get(`/admin/products/getDetailProduct/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data);
            return data;
        } catch (error) {
            console.log("Error while fetching Product by ID:", error);
        }
    } else {
        console.log("No token found, unable to fetch product details.");
    }
};


export const AddProduct = async (ProductData: FormProduct) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
            const { data } = await api.post(`/admin/products/storeProduct`, ProductData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data);
            return data;
        } catch (error) {
            console.log("Error while adding Products:", error);
        }
    }
};


export const EditProduct = async (id: number | string, ProductData: FormProduct) => {
    const token = sessionStorage.getItem('token'); 
    if (token) {
        try {
            const { data } = await api.put(`/admin/products/updateProduct/${id}`, ProductData, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            return data; 
        } catch (error) {
            console.log("Error while editing Product:", error); 
        }
    }
};


export const DeleteProduct = async (id: number | string) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const { data } = await api.delete(`/admin/products/deleteProduct/${id}`, {
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
  