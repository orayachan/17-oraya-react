import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen bg-[#e8e8e8] text-center mt-16">
      <p className="text-4xl font-bold">Generation Thailand</p>
      <p className="text-4xl font-bold">React - Assesment</p>
      <section className="py-8">
        <button className="bg-white mx-8 p-4 rounded shadow-xl">
            <Link to="/user">User Home Section</Link>
        </button>
        <button className="bg-white mx-8 p-4 rounded shadow-xl">
            <Link to="/admin">Admin Home Section</Link>
        </button>
      </section>
      <Outlet />
    </div>
  );
};

export default Home;
