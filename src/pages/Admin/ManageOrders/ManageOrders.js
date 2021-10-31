import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const ManageOrders = () => {
  const [order, setOrder] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://frightful-demon-22619.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, []);
  // Delete An Order

  const handleDeleteOrder = (id) => {
    const check = window.confirm("Are you sure,you want to Delete this order?");

    if (check) {
      const url = `https://frightful-demon-22619.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            const restOrder = order.filter((order) => order._id !== id);
            setOrder(restOrder);
            setMessage("Your Order Deleted Successfully!");
          }
        });
    }
  };
  return (
    <div className="py-4">
      <h2 className="tracking-wider text-2xl font-bold xl:text-4xl lg:text-4xl md:text-3xl  lg:font-bold md:font-bold sm:font-bold pt-20 pb-8 title-design">
        All Orders : {order.length}
      </h2>
      <h4 className="text-green-500 ">{message}</h4>
      <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-6 header py-12">
        <div>Service</div>
        <div>Price Range</div>
        <div>Product Type</div>
        <div>
          From <i class="fas fa-arrow-right"></i> To
        </div>
        <div>Order-status</div>
        <div>Cancel</div>
      </div>
      {order.map((order) => (
        <div>
          <div className="grid grid-cols-2 grid:cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6  border-2 border-dotted  xl:border-b-4 lg:border-b-4  p-6 mx-4 xl:mx-0 lg:mx-0">
            <h3 className="border-r-2">{order.serviceName}</h3>
            <h5 className="border-r-2 ">{order.price}</h5>
            <h5 className="border-r-2">{order.type}</h5>
            <h5 className="border-r-2 px-2">
              {order.sending_location}
              <i className="fas fa-arrow-right px-2"></i>
              {order.receiving_location}
            </h5>
            <h5 className="text-blue-900 border-r-2">
              {order.status}

              <NavLink to={`/order/${order._id}`}>
                <button className="pl-4">
                  <i className="far fa-edit text-indigo-600"></i>
                </button>
              </NavLink>
            </h5>
            <button onClick={() => handleDeleteOrder(order._id)}>
              <i className="fas fa-trash-alt delete-btn"></i>
            </button>
          </div>
        </div>
      ))}

      <div>
        <NavLink to="/admin">
          <button className=" p-2 mt-8 btn-design text-white rounded shadow">
            Go to Admin Panel
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ManageOrders;
