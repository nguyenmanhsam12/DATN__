import React from 'react';

const ListProduct = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Product Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Slug</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Brand</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Variants</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Created At</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Product A</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">product-a</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Brand A</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Category X</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                <div>Size: L, Color: Red, Price: $29.99</div>
                <div>Size: M, Color: Blue, Price: $25.99</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2024-10-01</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-600 transition duration-200">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
