import { Link } from "react-router";
import AdminSystem from "../components/AdminSystem";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

const Admin = () => {
  return (
    <div className="w-screen bg-[#e8e8e8] text-center mt-16">
      <p className="text-4xl font-bold">Generation Thailand</p>
      <p className="text-4xl font-bold">Home - Admin Sector</p>
      <AdminSystem />
    </div>
  );
};



export default Admin;