import { Link } from "react-router";
// import React, { useState } from "react";

const User = () => {
  return (
    <div className="h-screen bg-[#e8e8e8] text-center mt-16">
      <p className="text-4xl font-bold">Generation Thailand</p>
      <p className="text-4xl font-bold">Home - User Sector</p>
      <section className="py-8">
        <button className="bg-white mx-8 p-4 rounded shadow-xl">
            <Link to="/user">User Home Sector</Link>
        </button>
        <button className="bg-white mx-8 p-4 rounded shadow-xl">
            <Link to="/admin">Admin Home Sector</Link>
        </button>
      </section>
    </div>
  );
};

export default User;
