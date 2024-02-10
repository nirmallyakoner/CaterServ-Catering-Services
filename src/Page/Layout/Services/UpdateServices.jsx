import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { list, productDetails, update } from "../../../Redux/Crudslice";

export default function UpdateServices() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [img, setimg] = useState();
  const { det } = useSelector((state) => state.Crud);
  const { status } = useSelector((state) => state.Crud);
  const { id } = useParams();
  console.log(id);

  const [product, setproduct] = useState({
    title: "",
    description: "",
    image: "",
  });
  useEffect(() => {
    dispatch(productDetails(id));
  }, [id]);

  const [error, seterror] = useState("");
  let name, value;
  const changingData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "title") {
      if (value.length === 0) {
        setproduct({ ...product, title: "" });
        seterror({ ...error, title: "Title is important" });
      } else {
        setproduct({ ...product, title: value });
        seterror({ ...error, title: "" });
      }
    }
    if (name === "description") {
      if (value.length === 0) {
        setproduct({ ...product, description: "" });
        seterror({ ...error, description: "Description is important" });
      } else {
        setproduct({ ...product, description: value });
        seterror({ ...error, description: "" });
      }
    }
    // if (name === "image") {
    //   if (value.length === 0) {
    //     setproduct({ ...product, image: "" });
    //     seterror({ ...error, image: "Image is important" });
    //   } else {
    //     setproduct({ ...product, image: value });
    //     seterror({ ...error, image: "" });
    //   }
    // }
  };

  const validation = () => {
    let error = {};
    if (!product.title) {
      error.title = "Please write the title";
    }
    if (!product.description) {
      error.description = "Please write the description";
    }
    return error;
  };

  useEffect(() => {
    if (det !== null) {
      setproduct({
        title: det?.title,
        description: det?.description,
      });
    }
  }, [det]);
  const submit = (e) => {
    e.preventDefault();

    seterror(validation);
    let formData = new FormData();
    formData.append("id", id);
    formData.append("title", product.title);
    formData.append("description", product.description);
    if (img) {
      formData.append("image", img);
    } else {
      formData.append("image", det.image);
    }
    // dispatch(update(formData));
    dispatch(update(formData)).then((res) => {
      // dispatch(list());
      console.log(res);
      if (res.payload.status === 200) {
        navigate("/services")
      }
      else {
        alert("Something Wrong")
      }
    });
    // navigate("/services");
  };
  // console.log(product);

  return (
    // <div
    //   className="container-fluid contact py-6 wow bounceInUp"
    //   data-wow-delay="0.1s"
    // >
    //   <div className="container">
    //     <div className="row g-0">
    //     <div className="col-1">
    //         <img
    //           src="img/background-site.jpg"
    //           className="img-fluid h-100 w-100 rounded-start"
    //           style={{ objectFit: "cover", opacity: "0.7" }}
    //           alt=""
    //         />
    //       </div>
    //       <div className="col-10">
    //         <div className="border-bottom border-top border-primary bg-light py-5 px-4">
    //           <div className="text-center">
    //             <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
    //               Book Us
    //             </small>
    //             <h1 className="display-5 mb-5">Update Services</h1>
    //           </div>
    //           <div className="row g-4 form" style={{ flexDirection: "column" }}>
    //             <div className="col-lg-4 col-md-6 mx-auto">
    //               <input
    //                 type="text"
    //                 className="form-control border-primary p-2"
    //                 placeholder="Enter Service Title"
    //                 name="title"
    //                 value={product.title}
    //                 onChange={changingData}
    //               />
    //               <span style={{ color: "red" }}>{error.title}</span>
    //             </div>

    //             <div className="col-lg-4 col-md-6 mx-auto">
    //               <input
    //                 type="text"
    //                 className="form-control border-primary p-2"
    //                 placeholder="Enter Service Description"
    //                 name="description"
    //                 value={product.description}
    //                 onChange={changingData}
    //               />
    //               <span style={{ color: "red" }}>{error.description}</span>
    //             </div>
    //             <div className="col-12 text-center">
    //               <button
    //                 type="submit"
    //                 onClick={submit}
    //                 className="btn btn-primary px-5 py-3 rounded-pill"
    //               >
    //                 Submit Now
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-1">
    //         <img
    //           src="img/background-site.jpg"
    //           className="img-fluid h-100 w-100 rounded-end"
    //           style={{ objectFit: "cover", opacity: "0.7" }}
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      className="container-fluid contact py-6 wow bounceInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="row g-0">
          <div className="col-1">
            <img
              src="/img/background-site.jpg"
              className="img-fluid h-100 w-100 rounded-start"
              style={{ objectFit: "cover", opacity: "0.7" }}
              alt=""
            />
          </div>
          <div className="col-10">
            <div className="border-bottom border-top border-primary bg-light py-5 px-4">
              <div className="text-center">
                <h1 className="display-5 mb-5">Update Your Services</h1>
              </div>
              <div
                className="row g-4 form "
                style={{ flexDirection: "column" }}
              >
                <div className="col-lg-4 col-md-6 mx-auto">
                  <input
                    type="text"
                    className="form-control border-primary p-2"
                    placeholder="Enter Your New Title"
                    name="title"
                    value={product.title}
                    onChange={changingData}
                  />
                  <span style={{ color: "red" }}>{error.title}</span>
                </div>
                <div className="col-lg-4 col-md-6 mx-auto">
                  <input
                    type="text"
                    className="form-control border-primary p-2"
                    placeholder="Enter Your New Description"
                    name="description"
                    value={product.description}
                    onChange={changingData}
                  />
                  <span style={{ color: "red" }}>{error.description}</span>
                </div>
                <div class="col-lg-4 col-md-6 mx-auto">
                  <input
                    type="file"
                    onChange={(e) => setimg(e.target.files[0])}
                    name="img"
                    accept="image/*"
                    class="form-control"
                  />

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
                    <>
                      {det?.image !== "" ? (
                          <div style={{ display:"flex",  justifyContent: "center", alignItems: "center" }}>
                            <img
                          height="70px"
                          src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${det?.image}`}
                          alt=""
                              className="upload-img mt-3 rounded-circle "
                              style={{ height: "120px", width:"130px", objectFit:"cover" }}
                        />
                        </div>
                      ) : (
                        <img height="90px" alt="" className="upload-img" />
                      )}
                    </>
                  )}
                  {img === "" && <p>Drag or drop content here</p>}
                </div>
                <div className="col-12 text-center">
                  {status == "loading" ? (
                    <button
                      type="submit"
                      onClick={submit}
                      className="btn btn-primary px-5 py-3 rounded-pill"
                    >
                      Loading...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={submit}
                      className="btn btn-primary px-5 py-3 rounded-pill"
                    >
                      Update
                    </button>
                  )}
                </div>
                <div
                  className="col-12 text-center mt-3"
                  style={{ fontSize: "20px" }}
                >
                  <Link to="/services">Go To Services</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1">
            <img
              src="/img/background-site.jpg"
              className="img-fluid h-100 w-100 rounded-end"
              style={{ objectFit: "cover", opacity: "0.7" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
