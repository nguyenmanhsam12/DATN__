// Logout.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("roles");
    localStorage.removeItem("token");
    navigate("/login"); 
  };

  return (
    <button onClick={handleLogout} className="text-white">
      Logout
    </button>
  );
};

export default Logout
