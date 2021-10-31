import { Spin } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { _id, name, price, describe, img } = service;
  console.log(service);
  return (
    <div className=" xl:shadow-lg lg:shadow-lg xl:hover:shadow-2xl lg:hover:shadow-2xl pt-8 p-8 rounded">
      {service.name ? (
        <div className="service-card">
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
        <Spin />
      )}
    </div>
  );
};

export default Service;
