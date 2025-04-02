import { Link } from "react-router";
// import React, { useState } from "react";

const Admin = () => {
  return (
    <div className="h-screen bg-[#e8e8e8] text-center mt-16">
      <p className="text-4xl font-bold">Generation Thailand</p>
      <p className="text-4xl font-bold">Home - Admin Sector</p>
      <section className="py-8">
        <button className="bg-white mx-8 p-4 rounded shadow-xl">
            <Link to="/user">User Home Sector</Link>
        </button>
        <button className="bg-white mx-8 p-4 rounded shadow-xl">
            <Link to="/admin">Admin Home Sector</Link>
        </button>
      </section>
      <section>
        <p className="text-2xl font-bold py-2">Create User Here:</p>
        <form>
            <input type="text" id="name" name="name" placeholder="Name" className="bg-white rounded p-2 mx-4 w-56"></input>
            <input type="text" id="lastname" name="lastname" placeholder="Last Name" className="bg-white rounded p-2 mx-4 w-56"></input>
            <input type="text" id="position" name="position" placeholder="Position" className="bg-white rounded p-2 mx-4 w-56"></input>
            <button type="submit" className="bg-violet-700 text-white p-2 mx-4 rounded w-18">Add</button>
        </form>
      </section>
      <section>
        <p className="text-2xl font-bold py-2">Create User Here:</p>
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
                    <td>{person.name}</td>
                    <td>{person.lastName}</td>
                    <td>{person.position}</td>
                    <td>{person.deleteButton}</td>
                </tr>
            </tbody>
        </table>
      </section>
    </div>
  );
};

export default Admin;