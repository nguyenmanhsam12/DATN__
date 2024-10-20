import React, { useState, useEffect } from 'react';
import { IUser } from '../../../interface/user';
import api from '../../../config/axios';
import { useParams, useNavigate } from 'react-router-dom';

type Props = {};

const EditUser = (props: Props) => {
  const [formData, setFormData] = useState<IUser>({
    id: 0,
    name: '',
    email: '',
    password: '',
    phone_number: '',
    address: '',
    city: '',
    created_at: null,
    updated_at: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = '27|uzuAoLeD4L4LXOixz6m3KO3NfnWwkqUcYlOfNxXPf7440ba0';
        const response = await api.get(`/admin/users/detail-user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.data && response.data.data && response.data.data.user) {
          const userData = response.data.data.user;
          setFormData({
            id: userData.id,
            name: userData.name,
            email: userData.email,
            password: '', // Keep password empty for security reasons
            phone_number: userData.phone_number,
            address: userData.address,
            city: userData.city,
            created_at: userData.created_at,
            updated_at: userData.updated_at,
          });
        } else {
          setError('Không tìm thấy người dùng.');
        }
      } catch (error) {
        console.error('Lỗi khi lấy người dùng:', error);
        setError('Có lỗi xảy ra khi lấy dữ liệu người dùng.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser(); 
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token = '27|uzuAoLeD4L4LXOixz6m3KO3NfnWwkqUcYlOfNxXPf7440ba0';
      await api.put(`/admin/users/update-user/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      alert('Cập nhật người dùng thành công!');
      navigate('/dashboard/list-users'); // Redirect to the user list page
    } catch (error) {
      console.error('Lỗi khi cập nhật người dùng:', error);
      setError('Có lỗi xảy ra khi cập nhật thông tin người dùng.');
    }
  };

  // Ensure form only renders when data is fetched
  if (loading) return <div>Đang tải...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="flex justify-center bg-gray-100 w-full">
      <div className="w-full max-w-full bg-white p-10 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Chỉnh sửa Người dùng
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Tên
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập tên người dùng"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập email"
            />
          </div>

          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
              Số điện thoại
            </label>
            <input
              type="text"
              name="phone_number"
              // value={formData.phone_number}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập số điện thoại"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Địa chỉ
            </label>
            <input
              type="text"
              name="address"
              // value={formData.address}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập địa chỉ"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              Thành phố
            </label>
            <input
              type="text"
              name="city"
              // value={formData.city}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập thành phố"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-gray-700 transition duration-300"
            >
              Cập nhật Người dùng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
