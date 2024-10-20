import React, { useState, useEffect } from 'react';
import { Irole } from '../../interface/role';
import api from '../../config/axios';

type Props = {};

const ListRoles = (props: Props) => {
  const [roles, setRoles] = useState<Irole[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch roles khi component mount
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const token = '27|uzuAoLeD4L4LXOixz6m3KO3NfnWwkqUcYlOfNxXPf7440ba0';
        const response = await api.get('/admin/roles', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.data && response.data.data) {
          setRoles(response.data.data); // Giả sử roles nằm trong data.data
        } else {
          setError('Không tìm thấy danh sách vai trò.');
        }
      } catch (error) {
        console.error('Lỗi khi lấy danh sách vai trò:', error);
        setError('Có lỗi xảy ra khi lấy danh sách vai trò.');
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  // Hàm delete role
  const handleDelete = async (id: number | string) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa vai trò này?')) return;

    try {
      const token = '27|uzuAoLeD4L4LXOixz6m3KO3NfnWwkqUcYlOfNxXPf7440ba0';
      await api.delete(`/admin/roles/deleteRole/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      // Sau khi xóa thành công, lọc lại danh sách roles
      setRoles(roles.filter(role => role.id !== id));
      alert('Xóa vai trò thành công!');
    } catch (error) {
      console.error('Lỗi khi xóa vai trò:', error);
      setError('Có lỗi xảy ra khi xóa vai trò.');
    }
  };

  if (loading) return <div>Đang tải vai trò...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Danh sách Vai trò</h2>
      {roles.length === 0 ? (
        <p>Không có vai trò nào.</p>
      ) : (
        <ul className="space-y-4">
          {roles.map((role) => (
            <li key={role.id} className="border p-4 rounded-md flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{role.display_name}</h3>
                <p className="text-gray-600">Tên: {role.name}</p>
              </div>
              <button
                onClick={() => handleDelete(role.id!)} // Sử dụng `id!` vì `id` là optional trong interface
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListRoles;
