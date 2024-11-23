import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      {/* <main className="p-4"> */}
        <Outlet /> 
      {/* </main> */}
    </>
  );
};

export default MainLayout;
