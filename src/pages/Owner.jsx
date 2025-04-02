import { Link } from "react-router";
import Image from "../assets/bear.png"

const Owner = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold p-4 mt-8">Oraya-GenMateD-17</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkVsUtSQTXdqL8LC0QFBX9E8RdA64cI6__Q&s" className="m-auto rounded-xl shadow"/>
      <img src={Image} className="w-36 mx-auto my-4 bg-red-50 hover:bg-amber-50 p-4 rounded-2xl border border-white border-4" />
      <p className="text-lg p-4">Hello! Nice to meet you.</p>
    </div>
  );
};

export default Owner;
