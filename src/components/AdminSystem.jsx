import React, { useState } from 'react';
// import axios from "axios";

const AdminSystem = () => {
  const [showTable, setShowTable] = useState(false);
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [employees, setEmployees] = useState([
    { name: "test-A", lastName: "test-A", position: "test-A" },
    { name: "test-B", lastName: "test-B", position: "test-B" },
    { name: "test-C", lastName: "test-C", position: "test-C" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    position: ""
  });

  const handleHomeClick = () => {
    setShowTable(!showTable);
    setShowAdminForm(false);
  };

  const handleAdminClick = () => {
    setShowAdminForm(!showAdminForm);
    setShowTable(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.lastName && formData.position) {
      setEmployees([...employees, { ...formData }]);
      setFormData({ name: "", lastName: "", position: "" });
      setShowTable(true);
    }
  };

  const handleDelete = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="p-6">
      <div className="py-4">
        <button
          onClick={handleHomeClick}
          className="bg-white mx-8 p-4 rounded shadow-xl"
        >
          User Home Sector
        </button>
        <button
          onClick={handleAdminClick}
          className="bg-white mx-8 p-4 rounded shadow-xl"
        >
          Admin Home Sector
        </button>
      </div>

      {showAdminForm && (
        <div className="bg-white px-8 py-4 m-4 border border-gray-200">
        <p className="flex justify-start text-2xl font-bold py-2">Create User Here</p>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-violet-300 hover:bg-violet-400 text-white p-2 m-2 rounded w-18"
                >
                Submit
              </button>
            </div>
        </form>
        </div>
      )}

      {(showTable || (showAdminForm && employees.length > 0)) && (
        <div className="mt-8">
          <div className=" flex justify-center rounded">
            <table className="bg-white border border-gray-100">
              <thead className="bg-white">
                <tr>
                  <th className="text-center py-2 px-4 border-b border-stone-200 bg-stone-300">Name</th>
                  <th className="text-center py-2 px-4 border-b border-stone-200 bg-stone-300">Last Name</th>
                  <th className="text-center py-2 px-4 border-b border-stone-200 bg-stone-300">Position</th>
                  {showAdminForm && <th className="text-center py-2 px-4 border-b border-stone-200 bg-stone-300">Action</th>}
                </tr>
              </thead>
              <tbody>
                {employees.map((person, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-2 px-4 border-b border-gray-50">{person.name}</td>
                    <td className="py-2 px-4 border-b border-gray-50">{person.lastName}</td>
                    <td className="py-2 px-4 border-b border-gray-50">{person.position}</td>
                    {showAdminForm && (
                      <td className="py-2 px-4 border-b border-gray-50">
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-300 hover:bg-red-400 text-white text-sm py-1 px-2 rounded transition-colors duration-300"
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSystem;