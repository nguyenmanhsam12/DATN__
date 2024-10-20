import api from '../config/axios';

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone_number: string;
}


// Hàm đăng ký người dùng
export const register = async (data: RegisterData) => {
  try {
    const response = await api.post(`/register`, data);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};


interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  try {
    const response = await api.post('/login', data);
    sessionStorage.setItem('token', response.data.token); 
    sessionStorage.setItem('roles', JSON.stringify(response.data.roles));
    return response.data; 
  } catch (error) {
    console.error('Error during login:', error);
    throw error; 
  }
};