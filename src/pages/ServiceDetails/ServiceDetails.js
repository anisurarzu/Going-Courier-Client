import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useService from "../../hooks/useServices";

import "./ServiceDetails.css";

const Servicedetails = () => {
  const [currentService, setCurrentService] = useState();

  const { serviceId } = useParams();
  const { service } = useService();
  useEffect(() => {
    let tempCurrentService = service.find(
      (singleService) => singleService.id === parseInt(serviceId)
    );
    setCurrentService(tempCurrentService);
  }, [service]);

  return (
    <div className="details-container">
      {currentService ? (
        <>
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 pt-16 lg:pt-8 ">
            <div></div>

            <div className="shadow-lg lg:rounded-t-2xl bg-white p-8">
              <h2 className="text-3xl font-bold text-green-500">
                {currentService.name}
              </h2>
              <div className=" p-8">
                <img className="rounded-2xl" src={currentService.img} alt="" />
              </div>
              <hr /> <br />
              <p className="text-xl font-bold text-gray-700">
                Price Range: {currentService.price}৳
              </p>
              <hr />
              <br />
              <p className="p-2 text-center text-gray-600 text-base">
                {currentService.describe}
              </p>
              <Link to="/contact">
                <button className="shadow rounded-lg text-white font-bold btn-design">
                  Contact Us
                </button>
              </Link>
            </div>
            <div></div>
          </div>
        </>
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default Servicedetails;
