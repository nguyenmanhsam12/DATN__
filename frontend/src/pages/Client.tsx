import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Client/Header/Header";
import Footer from "../components/Client/Footer/Footer";

type Props = {};

const Client = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Client;
