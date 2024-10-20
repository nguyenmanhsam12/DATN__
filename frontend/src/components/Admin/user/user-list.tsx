import React, { useEffect, useState } from 'react';
import { IUser } from '../../../interface/user'; // Import interface IUser
import api from '../../../config/axios'; // Import cấu hình axios
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]); // Trạng thái cho người dùng
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState<string | null>(null); // Trạng thái cho lỗi

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true); // Bắt đầu loading
      setError(null); // Reset thông báo lỗi

      try {
        const token = '27|uzuAoLeD4L4LXOixz6m3KO3NfnWwkqUcYlOfNxXPf7440ba0'; 
        const response = await api.get('/admin/users', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        // Kiểm tra phản hồi từ API
        if (response.data && response.data.data && Array.isArray(response.data.data.data)) {
          setUsers(response.data.data.data); // Cập nhật trạng thái người dùng
        } else {
          console.warn('Không có người dùng nào trong phản hồi');
          setUsers([]); // Reset người dùng nếu không có dữ liệu
        }
      } catch (error) {
        console.error('Lỗi khi lấy người dùng:', error);
        setError('Không thể lấy dữ liệu người dùng. Vui lòng thử lại sau.'); // Thiết lập thông báo lỗi
      } finally {
        setLoading(false); // Kết thúc loading
      }
    };

    fetchUsers(); // Gọi hàm fetch khi component được mount
  }, []);

  const deleteUser = async (id: number) => {
    const token = '27|uzuAoLeD4L4LXOixz6m3KO3NfnWwkqUcYlOfNxXPf7440ba0'; 

    try {
      console.log(`Gọi API để xóa người dùng với ID: ${id}`);
      const response = await api.delete(`/admin/users/delete-user/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Phản hồi từ API:', response);

      // Cập nhật danh sách người dùng sau khi xóa
      setUsers(users.filter(user => user.id !== id));
      alert(`User ID: ${id} đã được xóa thành công.`); // Thông báo thành công
    } catch (error) {
      console.error('Lỗi khi xóa người dùng:', error);
      setError('Không thể xóa người dùng. Vui lòng thử lại sau.');
    }
  };

  // Kiểm tra trạng thái loading
  if (loading) {
    return <div>Loading...</div>; 
  }

  // Kiểm tra có lỗi không
  if (error) {
    return <div className="text-red-600">{error}</div>; 
  }

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
          {users.length === 0 ? (
            <tr>
              <td colSpan={9} className="border border-gray-300 p-4 text-center">
                Không có dữ liệu
              </td>
            </tr>
          ) : (
            users.map((user: IUser) => (
              <tr className="hover:bg-gray-100" key={user.id}>
                <td className="border border-gray-300 p-4">{user.id}</td>
                <td className="border border-gray-300 p-4">{user.name}</td>
                <td className="border border-gray-300 p-4">{user.email}</td>
                <td className="border border-gray-300 p-4">{user.phone_number || 'Không có'}</td>
                <td className="border border-gray-300 p-4">{user.address || 'Không có'}</td>
                <td className="border border-gray-300 p-4">{user.city || 'Không có'}</td>
                <td className="border border-gray-300 p-4">{user.created_at ? String(user.created_at) : 'Không có'}</td>
                <td className="border border-gray-300 p-4">{user.updated_at ? String(user.updated_at) : 'Không có'}</td>
                <td className="border border-gray-300 p-4">
                 <div className='flex gap-2'>
                 <Link to={`/dashboard/edit-user/${user.id}`} className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition duration-200 ease-in-out" onClick={() => console.log(`Edit user ID: ${user.id}`)}>
                    Sửa
                  </Link>
                  <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out" onClick={() => deleteUser(user.id)}>
                    Xóa
                  </button>
                 </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
