import React from "react";
import { Link } from "react-router-dom";
import ManageOrders from "./ManageOrders/ManageOrders";

const Admin = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 py-24">
      <div className="flex justify-center">
        <img
          className="object-cover xl:h-40 w-1/3"
          src="https://i.ibb.co/94t16s7/undraw-Add-notes-re-ln36.png"
          alt=""
        />
      </div>
      {/* button */}
      <div>
        <Link to="/addService">
          <button className="btn-design p-2 mx-28 my-4 rounded text-white">
            Add New Service
          </button>
        </Link>
        <Link to="/manageOrders">
          <button className="btn-design p-2 mx-28 rounded text-white">
            Manage All Orders
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
