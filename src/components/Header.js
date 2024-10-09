import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [btnName, setBtnName] = useState("login");
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              setBtnName(btnName === "login" ? "logout" : "login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
