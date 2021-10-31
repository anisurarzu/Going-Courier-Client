import { restElement } from "@babel/types";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const UpdateOrder = () => {
  const [order, setOrder] = useState({});
  const [message, setMessage] = useState("");
  const { orderId } = useParams();
  console.log("orderid", orderId);

  useEffect(() => {
    fetch(`https://frightful-demon-22619.herokuapp.com/orders/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  // update status
  const handleStatusChange = (e) => {
    const updatedStatus = e.target.value;
    const updatedOrder = { ...order };
    updatedOrder.status = updatedStatus;
    setOrder(updatedOrder);
  };
  const handleUpdateOrderStatus = (e) => {
    e.preventDefault();
    const url = `https://frightful-demon-22619.herokuapp.com/orders/${orderId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setMessage("Status Updated Successfully!");
          setOrder({});
        }
      });
  };
  return (
    <div className="pt-12">
      <h2 className="text-2xl text-gray-700 font-bold py-4">
        Update Order Status
      </h2>
      <span className="py-2 text-green-500">{message}</span>
      <div className="pb-24">
        <h2>{order.serviceName || ""}</h2>
        <h2>Order-status: {order.status || ""}</h2>
        <form
          className="xl:shadow-lg lg:shadow-lg p-4 xl:mx-96 lg:mx-96 rounded-lg"
          onSubmit={handleUpdateOrderStatus}
        >
          <label htmlFor="status">Update Order Status</label>
          <br />
          <input
            onChange={handleStatusChange}
            className="p-2 border-2 rounded border-red-500"
            value={order.status || ""}
            type="text"
          />
          <br />
          <input
            className="btn-design p-2 my-2 text-white rounded shadow"
            type="submit"
            value="Update"
          />
        </form>
      </div>

      <NavLink to="/manageOrders">
        <button className="p-2 btn-design text-white rounded">
          Manage Orders
        </button>
      </NavLink>
    </div>
  );
};

export default UpdateOrder;
