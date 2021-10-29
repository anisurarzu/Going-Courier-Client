import { Carousel } from "antd";
import "antd/dist/antd.css";
import React, { useEffect } from "react";
import "./Banner.css";

const Banner = () => {
  const contentStyle = {
    height: "500px",
    color: "#fff",
    textAlign: "center",
  };
  function onChange(a, b, c) {}
  return (
    <div>
      <Carousel afterChange={onChange}>
        {/* slider 1 */}
        <div className="banner-1">
          <div
            style={contentStyle}
            className="banner-design pt-16 grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1"
          >
            <div
              data-aos="zoom-in-left"
              className="items-stretch lg:text-left lg:pl-32 text-center grid items-center justify-center"
            >
              <h2 className="text-2xl tracking-widest text-gray-700 pb-2 pt-8 font-extrabold">
                Welcome to "going"
              </h2>
              <h1 className="text-4xl lg:text-6xl text-white font-extrabold">
                We Provide Best Courier &
                <br />
                Parcel Service
              </h1>
              <hr />
              <p className="lg:text-xl ">
                Going Courier guarantees reliable delivery of your product to
                your customer, at the right location in the right time through
                its efficient distribution management.
              </p>
            </div>
          </div>
        </div>
        {/* slider 2 */}
        <div className="banner-2 ">
          <div
            style={contentStyle}
            className="banner-design pt-16 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1"
          >
            <div></div>
            <div className="items-center text-center ">
              <h2 className="text-2xl tracking-widest text-gray-700 pb-2 pt-8 font-extrabold">
                Here at "Going.." We Offer
              </h2>
              <h1 className="text-4xl lg:text-6xl text-white font-extrabold">
                World Class Services
              </h1>
              <hr />
              <p className="text-sm lg:text-lg">
                Going Courier guarantees reliable delivery of your product to
                your customer, at the right location in the right time through
                its efficient distribution management.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
