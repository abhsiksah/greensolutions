import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./style.css";
const Homelayout = () => {
  return (
    <div>
      <div className="home-container">
        <div className="home-hero-container-left">
          <Sidebar />
        </div>
        <div className="home-hero-container-right">
          <div className="home-hero-container-right-top">
            <Navbar />
          </div>
          <div className="home-hero-container-right-bottom">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homelayout;
