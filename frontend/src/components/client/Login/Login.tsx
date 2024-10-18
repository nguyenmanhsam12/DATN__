import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query'; 
import axios from "../../../configs/axios"; 

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: async (values: { username: string; password: string }) => {
      const response = await axios.post("/login", {
        email: values.username,
        password: values.password,
      });
      return response.data; 
    },
    
    onSuccess: (data) => { 
      console.log(data); 
      const { token, roles, username } = data;  
      console.log('Username:', username);  
      message.success("Đăng nhập thành công!");
      localStorage.setItem("roles", roles);
      localStorage.setItem("token", token);
      localStorage.setItem("username", username); // Lưu username vào localStorage
  
      navigate("/"); 
    },
    onError: (error: any) => {
      console.error("Login error:", error); 
      const errorMessage =
          error.response?.data?.errors?.email || "Đăng nhập thất bại!"; 
      message.error(errorMessage);
    },
    onSettled: () => {
      setLoading(false); 
    },
  });
  
  
  const onFinish = (values: { username: string; password: string }) => {
    setLoading(true); // Set loading state
    mutate(values); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-6">
          Đăng nhập vào tài khoản của bạn
        </h2>

        <Form
          form={form}
          name="login"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập của bạn!" }]}
          >
            <Input className="w-full" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu của bạn!" }]}
          >
            <Input.Password className="w-full" />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-between items-center">
              <Checkbox>Nhớ tài khoản</Checkbox>
              <a href="#" className="text-blue-600 hover:underline">
                Quên mật khẩu?
              </a>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Đăng nhập
            </Button>
          </Form.Item>

          <Form.Item>
            <p className="text-center">
              Bạn chưa có tài khoản?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Đăng ký ngay
              </Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
