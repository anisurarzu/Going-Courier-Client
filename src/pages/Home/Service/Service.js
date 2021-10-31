import { Spin } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";
import "./Service.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Service = ({ service }) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1500,
    });
  }, []);
  const { _id, name, price, describe, img } = service;

  return (
    <div className=" xl:shadow-lg lg:shadow-lg xl:hover:shadow-2xl lg:hover:shadow-2xl pt-8 p-8 rounded">
      {service ? (
        <div data-aos="zoom-in-down" className="service-card">
          <img className="lg:object-contain lg:h-48 w-full" src={img} alt="" />
          <h3 className="text-xl font-bold text-gray-600 pt-2">{name}</h3>
          <p className="text-xl font-semibold text-red-500">{price}৳</p>
          <p className="text-gray-900 py-2">{describe}</p>

          <Link to={`/service/${_id}`}>
            <button className="btn-design  hover:bg-gray-700 text-white text-center py-2 px-4 rounded-full">
              <i className="fas fa-truck"></i> Take This
            </button>
          </Link>
        </div>
      ) : (
        <Spin></Spin>
      )}
    </div>
  );
};

export default Service;
