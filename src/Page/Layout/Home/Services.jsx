import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { list, remove } from "../../../Redux/Crudslice";
import { reset_redirectTo } from "../../../Redux/Authslice";
import SweetAlertComponent from "../../../SweetAlert/SweetAlert";
import { productu } from "../../../Redux/Helper";

export default function Services() {
  const dispatch = useDispatch();
  const [delete_id, setDelete_id] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const { listData, totalRecords, totalPages } = useSelector(
    (state) => state.Crud
  );
  const { redirectTo } = useSelector((state) => state.Auth);
  useEffect(() => {
    dispatch(list());
  }, []);
  const delete_funcc = (id) => {
    if (delete_id !== "") {
      dispatch(remove({ id: delete_id })).then(() => {
        dispatch(list());
      });
    }
    setDelete_id("");
    setIsDelete(false);
  };
  useEffect(() => {
    dispatch(reset_redirectTo(null));
  }, [redirectTo]);
  console.log(listData, "khkjhkj");
  return (
    <div>
      <>
        {/* Service Start */}
        <div className="container-fluid service py-6">
          <div className="container">
            <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
              <Link
                to="/createServices"
                className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft"
              >
                Create New Services
              </Link>
              <h1 className="display-5 mb-5">What We Offer</h1>
            </div>
            <div className="row g-4">
              {listData?.map((i) => {
                return (
                  <>
                    {totalRecords >= 1 ? (
                      <div
                        className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp"
                        data-wow-delay="0.1s"
                        key={i._id}
                      >
                        <div className="bg-light rounded service-item">
                          <div className="service-content d-flex align-items-center justify-content-center p-4">
                            <div className="service-content-icon text-center">
                              <img
                                src={productu(i.image)}
                                class="card-img-top border border-dark "
                                style={{
                                  objectFit: "cover",
                                  height: "200px",
                                  width:"250px",
                                  borderRadius: "15px 15px 0 0",
                                }}
                                alt="..."
                              />{" "}
                              <h4 className="mb-3 mt-2">{i.title}</h4>
                              <p className="mb-4">{i.description} </p>
                              <Link
                                to={`/updateServices/${i._id}`}
                                className="btn btn-primary px-4 py-2 rounded-pill me-4"
                              >
                                {" "}
                                Update
                              </Link>
                              <Link
                                to=""
                                onClick={() => {
                                  setDelete_id(i?._id);
                                  setIsDelete(true);
                                }}
                                className="btn btn-primary px-4 py-2 rounded-pill"
                              >
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      "NO DATA FOUND"
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {isDelete && (
          <SweetAlertComponent
            confirm={delete_funcc}
            cancle={() => setIsDelete(false)}
            title={"Are you sure?"}
            subtitle={"You will not be able to recover!"}
          />
        )}
        {/* Service End */}
      </>
    </div>
  );
}
