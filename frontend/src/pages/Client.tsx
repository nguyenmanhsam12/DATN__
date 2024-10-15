import React from "react";
import Header from "../components/client/Header/Header";
import Footer from "../components/client/Footer/Footer";
import { Outlet } from "react-router-dom";
// import Main from "../components/client/Main";

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
