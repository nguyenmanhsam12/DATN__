import React from 'react';

const EditUser = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit User</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Tên</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nhập tên"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Nhập email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone_number" className="block text-gray-700 font-semibold mb-2">Số điện thoại</label>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="Nhập số điện thoại"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Địa chỉ</label>
          <textarea
            name="address"
            id="address"
            placeholder="Nhập địa chỉ"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        
        <div className="mb-6">
          <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">Thành phố</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Nhập thành phố"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Lưu thông tin
        </button>
      </form>
    </div>
  );
};

export default EditUser;
