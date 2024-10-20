import React, { useState } from 'react';
import { login } from '../../interface/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      const roles = JSON.parse(sessionStorage.getItem('roles') || '[]');

      setSuccessMessage('Đăng nhập thành công!');
      setErrorMessage('');
      console.log(response);
      if (roles.includes('admin')) {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    } catch (error) {
      setErrorMessage('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
      setSuccessMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
  <h2 className="text-2xl font-bold text-center mb-6">Đăng Nhập</h2>
  
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Nhập email"
      required
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  
  <div className="mb-6">
    <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Mật Khẩu:</label>
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Nhập mật khẩu"
      required
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200">
    Đăng Nhập
  </button>
  
  {errorMessage && <p className="text-red-500 mt-4 text-center">{errorMessage}</p>}
  {successMessage && <p className="text-green-500 mt-4 text-center">{successMessage}</p>}
</form>

  );
};

export default Login;
