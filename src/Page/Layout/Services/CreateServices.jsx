import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { create, list } from "../../../Redux/Crudslice";

export default function CreateServices() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [img, setimg] = useState();
  const { status } = useSelector((state) => state.Crud);

  const [created, setCreated] = useState({
    title: "",
    description: "",
    image: "",
  });

  let [error, setError] = useState("");
  const validation = () => {
    let error = {};
    if (!created.title) {
      error.title = "Title is Important";
    }
    if (!created.description) {
      error.description = "Description is Important";
    }
    // if (!created.image) {
    //   error.image = "Image is Important";
    // }

    return error;
  };

  let name, value;
  const PostUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "title") {
      if (value.length === 0) {
        setCreated({ ...created, title: "" });
        setError({ ...error, title: "Title Is Important" });
      } else {
        setCreated({ ...created, title: value });
        setError({ ...error, title: "" });
      }
    }
    if (name === "description") {
      if (value.length === 0) {
        setCreated({ ...created, description: "" });
        setError({ ...error, description: "Description Is Important" });
      } else {
        setCreated({ ...created, description: value });
        setError({ ...error, description: "" });
      }
    }
    // if (name === "image") {
    //   if (value.length === 0) {
    //     setCreated({ ...created, image: "" });
    //     setError({ ...error, image: "Image Is Important" });
    //   } else {
    //     setCreated({ ...created, image: value });
    //     setError({ ...error, image: "" });
    //   }
    // }
  };

  const submitInfo = (e) => {
    e.preventDefault();
    setError(validation());
    const formData = new FormData();
    formData.append("title", created.title);
    formData.append("description", created.description);
    formData.append("image", img);
    dispatch(create(formData)).then(() => {
      dispatch(list());
    });
    // navigate("/services");
  };

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
                <h1 className="display-5 mb-5">Create New Services</h1>
              </div>
              <div className="row g-4 form" style={{ flexDirection: "column" }}>
                <div className="col-lg-4 col-md-6 mx-auto">
                  <input
                    type="text"
                    className="form-control border-primary p-2"
                    placeholder="Enter Service Title"
                    name="title"
                    value={created.title}
                    onChange={PostUserData}
                  />
                  <span style={{ color: "red" }}>{error.title}</span>
                </div>

                <div className="col-lg-4 col-md-6 mx-auto">
                  <input
                    type="text"
                    className="form-control border-primary p-2"
                    placeholder="Enter Service Description"
                    name="description"
                    value={created.description}
                    onChange={PostUserData}
                  />
                  <span style={{ color: "red" }}>{error.description}</span>
                </div>
                <div className=" col-lg-4 col-md-6 mx-auto">
                  <input
                    type="file"
                    onChange={(e) => setimg(e.target.files[0])}
                    name="image"
                    accept="image/*"
                    className="form-control border-primary p-2"
                  />
                  <span style={{ color: "red" }}>{error.image}</span>

                  {img !== "" && img !== undefined && img !== null ? (
                    <div style={{ display:"flex",  justifyContent: "center", alignItems: "center" }} >
                      <img
                      style={{ height: "120px", width:"130px", objectFit:"cover" }}
                      src={URL.createObjectURL(img)}
                      alt=""
                      className="upload-img mt-3 rounded-circle"

                    />
                    </div>
                  ) : (
                    <>{img === "" && <p>Drag or drop content here</p>}</>
                  )}
                </div>
                <div className="col-12 text-center">
                  {status == "loading" ? (
                    <button
                      type="submit"
                      onClick={submitInfo}
                      className="btn btn-primary px-5 py-3 rounded-pill"
                    >
                      Loading...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={submitInfo}
                      className="btn btn-primary px-5 py-3 rounded-pill"
                    >
                      Create Product
                    </button>
                  )}
                  <div
                    className="col-12 text-center mt-3"
                    style={{ fontSize: "20px" }}
                  >
                    <Link to="/services">Go To Services</Link>
                  </div>
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
