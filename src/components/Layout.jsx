import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen bg-[#e8e8e8]">
      <nav>
        <ul className="text-2xl font-bold flex flex-row justify-end gap-4 pr-4 border-b border-b-gray-500">
          <li className="p-4">
            <Link to="/home">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/owner">Owner</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
