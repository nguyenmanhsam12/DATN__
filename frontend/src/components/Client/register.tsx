import React, { useState } from 'react';
import { register } from '../../interface/authService';
import { useNavigate } from 'react-router-dom';

interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone_number: string;
}

const RegisterComponent: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
    phone_number: '', // Thêm phone_number vào state
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await register(formData); 
      console.log('Registration successful', result);
      setSuccessMessage(result.message); 
      setErrorMessage(null);
      navigate('/login')
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
      setSuccessMessage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Register</h2>
  
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
        className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  
    <div className="mb-4">
      <label htmlFor="phone_number" className="block text-gray-600 text-sm font-medium mb-2">Phone Number</label>
      <input
        type="text"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  
    <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md font-bold text-lg hover:bg-blue-600 transition duration-300">
      Register
    </button>
  
    {errorMessage && <p className="mt-4 text-center text-red-500">{errorMessage}</p>}
    {successMessage && <p className="mt-4 text-center text-green-500">{successMessage}</p>}
  </form>
  
  );
};

export default RegisterComponent;
