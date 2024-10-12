import React, { useState } from 'react';
// import { HiPlus } from 'react-icons/hi';

const AddProduct = () => {
    const [showVariantForm, setShowVariantForm] = useState(false);

  const handleToggleVariantForm = () => {
    setShowVariantForm(!showVariantForm);
  };
    
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Add New Product</h1>
      <form>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter product name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Slug */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
            Slug
          </label>
          <input
            type="text"
            id="slug"
            placeholder="Enter product slug"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Brand */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
            Brand
          </label>
          <input
            type="text"
            id="brand"
            placeholder="Enter brand name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            type="text"
            id="category"
            placeholder="Enter category name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Variants Section */}
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        <div className="border p-4 mb-4 rounded">
          <button
            type="button"
            onClick={handleToggleVariantForm}
            className="flex items-center text-blue-500 hover:text-blue-700 mb-4"
          >
            <div className="mr-2" />
            Add Variant
          </button>
          {/* List variants */}
            <div className="mb-4">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-500 text-white">
                    <tr>
                        <th className="py-3 px-4 text-left font-semibold">Size</th>
                        <th className="py-3 px-4 text-left font-semibold">Color</th>
                        <th className="py-3 px-4 text-left font-semibold">Price</th>
                        <th className="py-3 px-4 text-left font-semibold">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-gray-100 border-b hover:bg-gray-200 transition">
                        <td className="py-3 px-4">M</td>
                        <td className="py-3 px-4">Black</td>
                        <td className="py-3 px-4">$25</td>
                        <td className="py-3 px-4">
                        <button className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                        <button className="ml-3 text-yellow-500 hover:text-yellow-700 font-semibold">Edit</button>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-100 transition">
                        <td className="py-3 px-4">L</td>
                        <td className="py-3 px-4">White</td>
                        <td className="py-3 px-4">$30</td>
                        <td className="py-3 px-4">
                        <button className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                        <button className="ml-3 text-yellow-500 hover:text-yellow-700 font-semibold">Edit</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

          {/* Form variant */}
          {showVariantForm && (
            <div className="mb-4">
              {/* Size */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Size</label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        defaultValue=""
                    >
                        <option value="" disabled>Select a size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        {/* Có thể lấy dữ liệu từ bảng sizes ở đây */}
                    </select>
                </div>

              {/* Color */}
              <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Color</label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        defaultValue=""
                    >
                        <option value="" disabled>Select a color</option>
                        <option value="black">black</option>
                        <option value="white">white</option>
                        <option value="blue">blue</option>
                        <option value="red">red</option>
                        {/* Có thể lấy dữ liệu từ bảng sizes ở đây */}
                    </select>
                </div>

              {/* Price */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button type="submit" className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
            </div>
          )}
          
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
