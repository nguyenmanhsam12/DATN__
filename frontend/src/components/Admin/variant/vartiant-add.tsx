import React, { useContext } from 'react'
import { VariantCT } from '../../../context/VariantContext'
import { useForm } from 'react-hook-form'
import { FormVariant } from '../../../interface/variant'
import { ProductCT } from '../../../context/ProductContext'
import { SizeCT } from '../../../context/SizeContext'
import { colorCT } from '../../../context/ColorContext'
import { IProduct } from '../../../interface/product'
import { Sizes } from '../../../interface/size'
import { IColor } from '../../../interface/color'

type Props = {}

const VariantAdd = (props: Props) => {
    const {onAdd} = useContext(VariantCT)
    const {register, handleSubmit} = useForm<FormVariant>()
    const {products} = useContext(ProductCT)
    const {sizes} = useContext(SizeCT)
    const {colors} = useContext(colorCT)

    const onSubmit = (data: FormVariant) => {
        // Chuyển đổi image_path từ FileList thành mảng File[]
        const fileList = data.image_path as unknown as FileList; // Đảm bảo image_path được coi là FileList
        const imageFiles = Array.from(fileList); // Chuyển đổi FileList thành mảng
      
        // Bạn có thể thực hiện logic tải ảnh ở đây, hoặc chuyển đổi tệp thành đường dẫn nếu cần
        const uploadedImagePaths = imageFiles.map(file => URL.createObjectURL(file)); // Chỉ là ví dụ, bạn sẽ thay thế bằng upload thực tế
      
        const finalData = {
          ...data,
          image_path: uploadedImagePaths, // Gán mảng các đường dẫn ảnh
        };
      
        onAdd(finalData);
        console.log(finalData);
    };
  return (
    <div className="container mx-auto px-4 py-6">
    <h1 className="text-2xl font-semibold mb-6">Add Product</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 border border-gray-300 rounded-md shadow-md">
        {/* Product ID Field */}
        <div className="mb-4">
        <label htmlFor="product_id" className="block text-sm font-medium text-gray-700">
            Product
        </label>
        <select
        {...register('product_id')}
            id="product_id"
            name="product_id"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
            <option value="">Select a Product</option>
            {products.map((product:IProduct,i:number)=>(
                <option key={i} value={product.id}>{product.name}</option>
            ))}
        </select>
        </div>

        {/* Size ID Field */}
        <div className="mb-4">
        <label htmlFor="size_id" className="block text-sm font-medium text-gray-700">
            Size
        </label>
        <select
        {...register('size_id')}
            id="size_id"
            name="size_id"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
            <option value="">Select a Size</option>
            {sizes.map((size:Sizes,i:number)=>(
                <option key={i} value={size.id}>{size.size}</option>
            ))}
        </select>
        </div>

        {/* Brand ID Field */}
        <div className="mb-4">
        <label htmlFor="color_id" className="block text-sm font-medium text-gray-700">
            Color
        </label>
        <select
        {...register('color_id')}
            id="color_id"
            name="color_id"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
            <option value="">Select a Colors</option>
            {colors.map((color:IColor,i:number)=>(
                <option key={i} value={color.id}>{color.color}</option>
            ))}
        </select>
        </div>
      
      {/* SKU Field */}
      <div className="mb-4">
        <label htmlFor="sku" className="block text-sm font-medium text-gray-700">
          SKU
        </label>
        <input
        {...register('sku')}
          type="text"
          id="sku"
          name="sku"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Stock Field */}
      <div className="mb-4">
        <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
          Stock
        </label>
        <input
        {...register('stock')}
          type="text"
          id="stock"
          name="stock"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>



      {/* Price Field */}
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
        {...register('price')}
          type="text"
          id="price"
          name="price"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
            <input
                type="file"
                {...register('image_path')}
                multiple // Cho phép chọn nhiều ảnh
                className="border border-gray-300 p-2 rounded"
            />
    </div>




      {/* Submit Button */}
      <div className="text-right">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </div>
    </form>
  </div>
  )
}

export default VariantAdd