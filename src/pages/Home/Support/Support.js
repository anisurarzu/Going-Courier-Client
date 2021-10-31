import React from "react";
import "./Support.css";
import callSupport from "../../../image/who-are/call.png";
import maplive from "../../../image/who-are/map.png";
import security from "../../../image/who-are/security.png";
const Support = () => {
  return (
    <div className="support xl:px-44 lg:px-44 md:px-32 sm:px-8 xl:pb-12 lg:pb-12">
      <h2 className="tracking-wider text-3xl font-bold xl:text-5xl lg:text-5xl md:text-4xl  lg:font-bold md:font-bold sm:font-bold  pb-8">
        Support From Us
      </h2>

      <div className="grid gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div data-aos="zoom-out-right">
          <img
            className="lg:object-contain lg:h-48 w-full"
            src={callSupport}
            alt=""
          />
          <h3 className="text-2xl xl:text-3xl lg:text-3xl md:text-2xl font-bold text-gray-700">
            Call Center Support
          </h3>
          <p className="text-gray-600 xl:text-lg  lg:text-lg px-8">
            Call center support and key account managers are provided for all
            sorts of queries and needs of the clients.
          </p>
        </div>
        <div data-aos="zoom-out-up">
          <img
            className="lg:object-contain lg:h-48 w-full"
            src={maplive}
            alt=""
          />
          <h3 className="text-2xl xl:text-3xl lg:text-3xl md:text-2xl font-bold text-gray-700">
            Live Product Status
          </h3>
          <p className="text-gray-600  xl:text-lg  lg:text-lg px-8">
            We provide you the option of real time delivery state with which you
            can know the current status of product delivery.
          </p>
        </div>
        <div data-aos="zoom-out-left">
          <img
            className="lg:object-contain lg:h-48 w-full"
            src={security}
            alt=""
          />
          <h3 className="text-2xl xl:text-3xl lg:text-3xl md:text-2xl font-bold text-gray-700">
            100% Insurance Coverage
          </h3>
          <p className="text-gray-600 xl:text-lg  lg:text-lg px-8">
            We take full responsibility of the deliveries by providing 100%
            insurance coverage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
