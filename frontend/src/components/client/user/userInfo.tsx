import React, { useState, ReactNode } from "react";
import { Popover, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../configs/axios"; 

interface UserInfoProps {
  children?: ReactNode; 
}

const UserInfo: React.FC<UserInfoProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(newVisible);
  };

  const handleLogout = async () => {
    try {
      await axios.post("/logout", {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("roles");

      message.success("Đăng xuất thành công!");
      navigate("/login");
    } catch (error) {
      message.error("Có lỗi xảy ra khi đăng xuất!");
      console.error("Logout error: ", error);
    }
  };

  const content = (
    <div className="flex flex-col">
      <Link to="/profile" className="mb-2">Thông tin tài khoản</Link>
      <Link to="/orders" className="mb-2">Đơn hàng của tôi</Link>
      <Button onClick={handleLogout}>Đăng xuất</Button>
    </div>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      onVisibleChange={handleVisibleChange}
    >
      <div className="flex items-center space-x-2 cursor-pointer">
        <span>Chào, {username ? username : "Người dùng"}</span>
        {/* <i className="fas fa-chevron-down"></i> */}
      </div>
    </Popover>
  );
};

export default UserInfo;
