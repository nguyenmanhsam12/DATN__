import React from 'react';

type Props = {};

const UserList = (props: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-4 text-left">ID</th>
            <th className="border border-gray-300 p-4 text-left">Tên</th>
            <th className="border border-gray-300 p-4 text-left">Email</th>
            <th className="border border-gray-300 p-4 text-left">Số điện thoại</th>
            <th className="border border-gray-300 p-4 text-left">Địa chỉ</th>
            <th className="border border-gray-300 p-4 text-left">Thành phố</th>
            <th className="border border-gray-300 p-4 text-left">Ngày tạo</th>
            <th className="border border-gray-300 p-4 text-left">Ngày cập nhật</th>
            <th className="border border-gray-300 p-4 text-left">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {/* Thêm dữ liệu mẫu vào đây */}
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 p-4">1</td>
            <td className="border border-gray-300 p-4">Nguyễn Văn A</td>
            <td className="border border-gray-300 p-4">a@example.com</td>
            <td className="border border-gray-300 p-4">0123456789</td>
            <td className="border border-gray-300 p-4">Số 1, Đường ABC</td>
            <td className="border border-gray-300 p-4">Hà Nội</td>
            <td className="border border-gray-300 p-4">2024-10-01 10:00:00</td>
            <td className="border border-gray-300 p-4">2024-10-05 12:00:00</td>
            <td className="border border-gray-300 p-4">
              <button className="text-blue-600 hover:underline">Sửa</button>
              <button className="text-red-600 hover:underline ml-2">Xóa</button>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 p-4">2</td>
            <td className="border border-gray-300 p-4">Trần Thị B</td>
            <td className="border border-gray-300 p-4">b@example.com</td>
            <td className="border border-gray-300 p-4">0987654321</td>
            <td className="border border-gray-300 p-4">Số 2, Đường XYZ</td>
            <td className="border border-gray-300 p-4">Hồ Chí Minh</td>
            <td className="border border-gray-300 p-4">2024-09-25 09:00:00</td>
            <td className="border border-gray-300 p-4">2024-10-02 14:00:00</td>
            <td className="border border-gray-300 p-4">
              <button className="text-blue-600 hover:underline">Sửa</button>
              <button className="text-red-600 hover:underline ml-2">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
