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
      <section>
        <p className="text-2xl font-bold py-2 mt-16">Create User Here:</p>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* <td>{person.name}</td> */}
                    {/* <td>{person.lastName}</td> */}
                    {/* <td>{person.position}</td> */}
                    {/* <td>{person.deleteButton}</td> */}
                </tr>
            </tbody>
        </table>
      </section>
    </div>
  );
};

export default User;
