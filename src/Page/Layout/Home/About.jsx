import React from "react";

export default function About() {
  return (
    <div>
      <>
        {/* About Satrt */}
        <div className="container-fluid py-6">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                <img src="img/about.jpg" className="img-fluid rounded" alt="" />
              </div>
              <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                  About Us
                </small>
                <h1 className="display-5 mb-4">
                  Trusted By 200 + satisfied clients
                </h1>
                <p className="mb-4">
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore eit esdioilore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullaemco laboeeiris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor iesdein
                  reprehendeerit in voluptate velit esse cillum dolore.
                </p>
                <div className="row g-4 text-dark mb-5">
                  <div className="col-sm-6">
                    <i className="fas fa-share text-primary me-2" />
                    Fresh and Fast food Delivery
                  </div>
                  <div className="col-sm-6">
                    <i className="fas fa-share text-primary me-2" />
                    24/7 Customer Support
                  </div>
                  <div className="col-sm-6">
                    <i className="fas fa-share text-primary me-2" />
                    Easy Customization Options
                  </div>
                  <div className="col-sm-6">
                    <i className="fas fa-share text-primary me-2" />
                    Delicious Deals for Delicious Meals
                  </div>
                </div>
                {/* <a href="" className="btn btn-primary py-3 px-5 rounded-pill">
                  About Us
                  <i className="fas fa-arrow-right ps-2" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
      </>
    </div>
  );
}
