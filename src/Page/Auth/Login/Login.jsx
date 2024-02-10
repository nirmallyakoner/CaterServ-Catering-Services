import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../Redux/Authslice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { redirectTo, status } = useSelector((state) => state.Auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let [error, setError] = useState("");
  const validation = () => {
    let error = {};

    if (!user.email) {
      error.email = "Email Is Important";
    }
    if (!user.password) {
      error.password = "Password Is Important";
    }
    return error;
  };

  let name, value;
  const PostUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "email") {
      if (value.length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "Email Is Important" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setUser({ ...user, password: "" });
        setError({ ...error, password: "Password Is Important" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
  };
  const submitInfo = (e) => {
    e.preventDefault();
    setError(validation());
    const loginData = new FormData();
    loginData.append("email", user.email);
    loginData.append("password", user.password);
    dispatch(login(loginData)).then((e) => {
      if (e.payload.status === 200) {
        // console.log("navigate");
        navigate(`/services`);
      }
    });
  };

  // useEffect(() => {
  //   const RedirectUser = () => {
  //     let token = localStorage.getItem("token");
  //     console.log(token, "token");
  //     let isInLoginPage = window.location.pathname.toLowerCase() === "/login";
  //     console.log(isInLoginPage, "isloginpage");

  //     if (token !== null && token !== undefined && token !== "") {
  //       isInLoginPage && navigate("/services");
  //     }
  //   };

  //   RedirectUser();
  // }, [navigate, redirectTo]);

  return (
    <div
      className="container-fluid contact py-6 wow bounceInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="row g-0">
          <div className="col-1">
            <img
              src="img/background-site.jpg"
              className="img-fluid h-100 w-100 rounded-start"
              style={{ objectFit: "cover", opacity: "0.7" }}
              alt=""
            />
          </div>
          <div className="col-10">
            <div className="border-bottom border-top border-primary bg-light py-5 px-4">
              <div className="text-center">
                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                  Book Us
                </small>
                <h1 className="display-5 mb-5">User Login</h1>
              </div>
              <div
                className="row g-4 form "
                style={{ flexDirection: "column" }}
              >
                <div className="col-lg-4 col-md-6 mx-auto">
                  <input
                    type="email"
                    className="form-control border-primary p-2"
                    placeholder="Enter Your Email Address"
                    name="email"
                    value={user.email}
                    onChange={PostUserData}
                  />
                  <span style={{ color: "red" }}>{error.email}</span>
                </div>
                <div className="col-lg-4 col-md-6 mx-auto">
                  <input
                    type="password"
                    className="form-control border-primary p-2"
                    placeholder="Enter Your Password"
                    name="password"
                    value={user.password}
                    onChange={PostUserData}
                  />
                  <span style={{ color: "red" }}>{error.password}</span>
                </div>
                <div className="col-12 text-center">
                  
                  {status=="loading" ? <button
                    type="submit"
                    onClick={submitInfo}
                    className="btn btn-primary px-5 py-3 rounded-pill"
                  >
                    Loading...
                  </button> : <button
                    type="submit"
                    onClick={submitInfo}
                    className="btn btn-primary px-5 py-3 rounded-pill"
                  >
                    Login
                  </button>}
                </div>
                <div className="col-12 text-center ">
                  <span>Not Registered? </span>
                  <Link to="/register">Register Here</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1">
            <img
              src="img/background-site.jpg"
              className="img-fluid h-100 w-100 rounded-end"
              style={{ objectFit: "cover", opacity: "0.7" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
