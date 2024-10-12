import React from 'react';

const AddCoupon = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Thêm Mã Giảm Giá</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
            Mã Giảm Giá
          </label>
          <input
            type="text"
            id="code"
            placeholder="Nhập mã giảm giá"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Loại
          </label>
          <input
            type="text"
            id="type"
            placeholder="Nhập loại mã"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="value">
            Giá Trị
          </label>
          <input
            type="number"
            id="value"
            placeholder="Nhập giá trị mã"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startsAt">
            Thời Gian Bắt Đầu
          </label>
          <input
            type="datetime-local"
            id="startsAt"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiresAt">
            Thời Gian Kết Thúc
          </label>
          <input
            type="datetime-local"
            id="expiresAt"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Thêm Mã
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoupon;
