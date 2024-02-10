import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Token_remove } from "../../../Redux/Authslice";
import { useDispatch, useSelector } from "react-redux";
import { profile_pic } from "../../../Redux/Helper";

export default function Header() {
  const { isToggle } = useSelector((state) => state.Auth);
  const image = localStorage.getItem("profile_pic");
  const username = localStorage.getItem("first_name");
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(Token_remove());
  };

  // State for managing navbar collapse
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to toggle navbar collapse
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container-fluid nav-bar">
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-lg py-4">
          <Link to="/" className="navbar-brand">
            <h1 className="text-primary fw-bold mb-0">
              Cater<span className="text-dark">Serv</span>{" "}
            </h1>
          </Link>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            onClick={toggleNavbar} // Toggle navbar on click
          >
            <span className="fa fa-bars text-primary"></span>
          </button>
          <div
            className={
              "collapse navbar-collapse" + (isCollapsed ? "" : " show")
            }
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/services" className="nav-item nav-link">
                Services
              </Link>
              {isToggle ? (
                <Link onClick={remove} to="/" className="nav-item nav-link">
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="nav-item nav-link">
                  Login
                </Link>
              )}
            </div>
            {isToggle && (
              <>
                <img
                  src={profile_pic(image)}
                  style={{ height: "50px", width: "50px" }}
                  className="rounded-circle"
                  alt=""
                />
                <p className="m-2">{username?.toUpperCase()}</p>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
