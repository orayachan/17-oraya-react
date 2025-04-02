import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminSystem from "../components/AdminSystem";

const Home = () => {
  return (
    <div className="h-screen bg-[#e8e8e8] text-center mt-16">
      <p className="text-4xl font-bold">Generation Thailand</p>
      <p className="text-4xl font-bold">React - Assesment</p>
      <Outlet />
      <AdminSystem />
    </div>
  );
};

export default Home;
