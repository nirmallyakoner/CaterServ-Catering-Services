import React from 'react'

export default function Fact() {
  return (
    <div>
      <>
  {/* Fact Start*/}
  <div className="container-fluid faqt py-6">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-lg-7">
          <div className="row g-4">
            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.3s">
              <div className="faqt-item bg-primary rounded p-4 text-center">
                <i className="fas fa-users fa-4x mb-4 text-white" />
                <h1 className="display-4 fw-bold" data-toggle="counter-up">
                  689
                </h1>
                <p className="text-dark text-uppercase fw-bold mb-0">
                  Happy Customers
                </p>
              </div>
            </div>
            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.5s">
              <div className="faqt-item bg-primary rounded p-4 text-center">
                <i className="fas fa-users-cog fa-4x mb-4 text-white" />
                <h1 className="display-4 fw-bold" data-toggle="counter-up">
                  107
                </h1>
                <p className="text-dark text-uppercase fw-bold mb-0">
                  Expert Chefs
                </p>
              </div>
            </div>
            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.7s">
              <div className="faqt-item bg-primary rounded p-4 text-center">
                <i className="fas fa-check fa-4x mb-4 text-white" />
                <h1 className="display-4 fw-bold" data-toggle="counter-up">
                  253
                </h1>
                <p className="text-dark text-uppercase fw-bold mb-0">
                  Events Complete
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
          <div className="video">
            <button
              type="button"
              className="btn btn-play"
              data-bs-toggle="modal"
              data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
              data-bs-target="#videoModal"
            >
              <span />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Video */}
  <div
    className="modal fade"
    id="videoModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Youtube Video
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              src=""
              id="video"
              allowFullScreen=""
              allowscriptaccess="always"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Fact End */}
</>

    </div>
  )
}
