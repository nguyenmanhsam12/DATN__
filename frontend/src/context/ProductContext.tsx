import React, { Children, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormProduct, IProduct } from '../interface/product'
import { AddProduct, DeleteProduct, EditProduct, GetAllProduct } from '../services/productService'

type Props = {
    children: React.ReactNode
}


export const ProductCT = createContext({} as any)
const ProductContext = ({children}: Props) => {
    const[products, setProduct] = useState<IProduct[]>([])
    const navigate = useNavigate();

    useEffect(() =>{
        (async()=>{
            const resdata = await GetAllProduct();
            // console.log(resdata);
            setProduct(resdata.data)
        })()
    },[])

    const onDelete = async(id:string|number) =>{
        if (confirm('Are your sure?')) {
            try {
              const response = await DeleteProduct(id)
              if (response) {
                alert('Xóa thành công.');
                const newproducts = products.filter(product => product.id !== id);
                setProduct(newproducts);
                // console.log('Mảng products sau khi xóa:', newproducts);
              }
              
            } catch (error) {
              console.log(error);
              
            }
          }
    }

    const onAdd = async (resdata: FormProduct) => {
            try {
                const productData = await AddProduct(resdata);
                if (productData) {
                    alert('Size added successfully.');
                    setProduct([...products, productData.data]);
                    navigate('/dashboard/list-products');
                    // window.location.reload();
                }
            } catch (error) {
                console.log("Error while adding produc:", error);
            }
    };

    const onEdit = async (resData: FormProduct, id: number | string) => {
        try {
            const resdata = await EditProduct(id, resData);  
            const newProduct = products.map(product => (product.id === id) ? resdata : product);
            // console.log(newProduct);
            alert('product updated successfully.');
            setProduct(newProduct);
            navigate('/dashboard/list-products');
            window.location.reload();
        } catch (error) {
            console.log("Error while editing product:", error);
        }
      };
  return (
    <ProductCT.Provider value={{products,onDelete, onAdd, onEdit}}>
       {children}
    </ProductCT.Provider>
  )
}

export default ProductContext