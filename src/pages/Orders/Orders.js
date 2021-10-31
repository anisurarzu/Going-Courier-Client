import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import useAuth from "../../hooks/useAuth";

import "./Orders.css";
const Orders = () => {
  const [order, setOrder] = useState([]);
  const { user } = useAuth();
  let email = user?.email;
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        const myOrders = data.filter((data) => data.email === email);
        setOrder(myOrders);
        console.log(myOrders);
      });
  }, []);
  return (
    <div className="py-4">
      <h2 className="tracking-wider text-2xl font-bold xl:text-4xl lg:text-4xl md:text-3xl  lg:font-bold md:font-bold sm:font-bold pt-20 pb-8 title-design">
        My Orders
      </h2>
      <div className="grid grid-cols-6 header py-12">
        <div>Service</div>
        <div>Id</div>
        <div>Product Type</div>
        <div>
          From <i class="fas fa-arrow-right"></i> To
        </div>
        <div>Status</div>
        <div>Cancel</div>
      </div>
      {order.map((order) => (
        <div>
          <div className="grid grid:cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6  border-b-4 border-dotted  p-6">
            <h3>{order.serviceName}</h3>
            <h5>{order._id}</h5>
            <h5>{order.type}</h5>
            <h5>
              {order.sending_location}
              <i class="fas fa-arrow-right px-2"></i>
              {order.receiving_location}
            </h5>
            <h5>{order.status}</h5>
            <button>
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
