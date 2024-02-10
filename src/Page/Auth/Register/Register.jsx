import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../../Redux/Authslice";
import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const [img, setimg] = useState();
  const { status } = useSelector((state) => state.Auth);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    // confirm_password: "",\
    profile_pic: "",
  });
  let [error, setError] = useState("");
  const validation = () => {
    let error = {};
    if (!user.first_name) {
      error.first_name = "First Name is Important";
    }
    if (!user.last_name) {
      error.last_name = "Last Name is Important";
    }
    if (!user.email) {
      error.email = "Email is Important";
    }
    if (!user.password) {
      error.password = "Password is Important";
    }
    // if (!user.profile_pic) {
    //   error.profile_pic = "Profile Pic is Important";
    // }

    return error;
  };

  let name, value;
  const PostUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "first_name") {
      if (value.length === 0) {
        setUser({ ...user, first_name: "" });
        setError({ ...error, first_name: "First Name Is Important" });
      } else {
        setUser({ ...user, first_name: value });
        setError({ ...error, first_name: "" });
      }
    }
    if (name === "last_name") {
      if (value.length === 0) {
        setUser({ ...user, last_name: "" });
        setError({ ...error, last_name: "Last Name Is Important" });
      } else {
        setUser({ ...user, last_name: value });
        setError({ ...error, last_name: "" });
      }
    }
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
    // if (name === "profile_pic") {
    //   if (value.length === 0) {
    //     setUser({ ...user, profile_pic: "" });
    //     setError({ ...error, profile_pic: "Profile Pic Is Important" });
    //   } else {
    //     setUser({ ...user, profile_pic: value });
    //     setError({ ...error, profile_pic: "" });
    //   }
    // }
  };

  const submitInfo = (e) => {
    e.preventDefault();
    setError(validation());
    const formData = new FormData();
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("profile_pic", img);
    dispatch(register(formData));
  };
console.log(error.profile_pic);
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
                <h1 className="display-5 mb-5">User Registration</h1>
              </div>
              <div
                className="row g-4 form "
                style={{ flexDirection: "column" }}
              >
                <div className="col-lg-4 col-md-6 mx-auto">
                  <input
                    type="text"
                    className="form-control border-primary p-2"
                    placeholder="Enter Your First Name"
                    name="first_name"
                    value={user.first_name}
                    onChange={PostUserData}
                  />
                  <span style={{ color: "red" }}>{error.first_name}</span>
                </div>
                <div className="col-lg-4 col-md-6 mx-auto">
                  <input
                    type="text"
                    className="form-control border-primary p-2"
                    placeholder="Enter Your Last Name"
                    name="last_name"
                    value={user.last_name}
                    onChange={PostUserData}
                  />
                  <span style={{ color: "red" }}>{error.last_name}</span>
                </div>
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
                <div className=" col-lg-4 col-md-6 mx-auto">
                  <input
                    type="file"
                    onChange={(e) => setimg(e.target.files[0])}
                    name="profile_pic"
                    accept="image/*"
                    className="form-control border-primary p-2"
                  />
                 

                  {img !== "" && img !== undefined && img !== null ? (
                    <img
                      style={{ height: "180px" }}
                      src={URL.createObjectURL(img)}
                      alt=""
                      className="upload-img"
                    />
                  ) : (
                    <>{img === "" && <p>Drag or drop content here</p>}</>
                  )}
                  <span style={{ color: "red" }}>{error.profile_pic}</span>
                </div>
                
                <div className="col-12 text-center">
                  {status == "loading" ? (
                    <button
                      type="submit"
                      onClick={submitInfo}
                      className=" btn btn-primary px-5 py-3 rounded-pill"
                    >
                      Loading...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={submitInfo}
                      className="btn btn-primary px-5 py-3 rounded-pill"
                    >
                      Register
                    </button>
                  )}
                </div>
                <div className="col-12 text-center ">
                  <span>Already Registered? </span>
                  <Link to="/login">Login Here</Link>
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
