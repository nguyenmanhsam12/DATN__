import React from 'react';
import { Link } from 'react-router-dom';

const CouponList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quản Lý Mã Giảm Giá</h1>
      <div className="mb-4">
        <Link to={`/dashboard/coupon-add`} className="bg-blue-500 text-white py-2 px-4 rounded">
          Thêm Mã Giảm Giá
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-4 text-left">ID</th>
              <th className="border border-gray-300 p-4 text-left">Mã</th>
              <th className="border border-gray-300 p-4 text-left">Loại</th>
              <th className="border border-gray-300 p-4 text-left">Giá trị</th>
              <th className="border border-gray-300 p-4 text-left">Ngày bắt đầu</th>
              <th className="border border-gray-300 p-4 text-left">Ngày hết hạn</th>
              <th className="border border-gray-300 p-4 text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {/* Dữ liệu mẫu */}
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 p-4">1</td>
              <td className="border border-gray-300 p-4">SAVE10</td>
              <td className="border border-gray-300 p-4">Giảm giá</td>
              <td className="border border-gray-300 p-4">10.00</td>
              <td className="border border-gray-300 p-4">2024-10-01</td>
              <td className="border border-gray-300 p-4">2024-10-31</td>
              <td className="border border-gray-300 p-4">
                <button className="text-blue-500">Chỉnh sửa</button>
                <button className="text-red-500 ml-2">Xóa</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 p-4">2</td>
              <td className="border border-gray-300 p-4">FREESHIP</td>
              <td className="border border-gray-300 p-4">Vận chuyển miễn phí</td>
              <td className="border border-gray-300 p-4">0.00</td>
              <td className="border border-gray-300 p-4">2024-09-01</td>
              <td className="border border-gray-300 p-4">2024-12-31</td>
              <td className="border border-gray-300 p-4">
                <button className="text-blue-500">Chỉnh sửa</button>
                <button className="text-red-500 ml-2">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CouponList;
