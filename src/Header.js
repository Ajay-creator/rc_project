import React from "react";
import logo from "./logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="" />
      </Link>
      <div className="header_nav">
        <Link to="/">
          <div className="header_option">
            <span> Home </span>
          </div>
        </Link>
        <Link to="/blogs">
          <div className="header_option">
            <span> Blogs </span>
          </div>
        </Link>
        <div className="header_option">
          <span> projects </span>
        </div>
        <div className="header_option">
          <span> Gallery </span>
        </div>
        {!user ? (
          ""
        ) : (
          <Link to="/createBlog">
            <div className="header_option">
              <span> Create-Blog </span>
            </div>
          </Link>
        )}
        {!user ? (
          ""
        ) : (
          <Link to="/">
            <div className="header_option">
              <span> My account </span>
            </div>
          </Link>
        )}
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span> {user ? "sign out" : "sign in"} </span>
          </div>
        </Link>
      </div>
      <div className="user_name">
        <span>Hello {!user ? "Guest" : user.email}</span>
      </div>
    </div>
  );
}

export default Header;
