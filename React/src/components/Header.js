import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useNetworkStatus from "../utils/useNetworkStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const loginHandler = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const isOnline = useNetworkStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg lg: bg-yellow-100">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {isOnline ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-green-300"
            onClick={loginHandler}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
