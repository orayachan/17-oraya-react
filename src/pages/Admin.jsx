import { Link } from "react-router";

const Admin = () => {
  return (
    <div>
      <h1>Generation Thailand</h1>
      <h2>Home -User Sector</h2>
      <section>
        <button>User Home Sector</button>
        <button>Admin Home Sector</button>
      </section>
      <section>
        <p>Create User Here</p>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="Position"></input>
        <button onClick=''>Save</button>
      </section>
    </div>
  );
};

export default Admin;