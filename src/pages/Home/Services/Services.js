import { Spin } from "antd";
import React, { useEffect } from "react";
import useService from "../../../hooks/useServices";

import Service from "../Service/Service";

import "./Services.css";
const Services = () => {
  const { service } = useService();

  return (
    <div className="xl:px-44 lg:px-44 md:px-32 sm:px-8 services">
      <h2 className="tracking-wider text-4xl font-bold xl:text-5xl lg:text-5xl md:text-4xl  lg:font-bold md:font-bold sm:font-bold pt-20 pb-8">
        Our Services
      </h2>
      {service ? (
        <>
          <div className="grid gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {service.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
        </>
      ) : (
        <Spin></Spin>
      )}
    </div>
  );
};

export default Services;
