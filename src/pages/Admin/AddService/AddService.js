import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const AddService = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://frightful-demon-22619.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          setMessage("SuccessFully Inserted!");
        }
      });
  };

  return (
    <div className="pt-24">
      {/* service adding field */}
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold tex-gray-600 py-4">
            Add A New Service
          </h2>
          <h4 className="text-green-500 py-4">{message}</h4>
          <form
            className=" grid grid-cols-1 gap-2 justify-center items-center border-2 border-dotted border-red-500 mx-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="pt-8">
              <input
                className="border-2 p-2 w-1/3 mr-8 rounded"
                {...register("name")}
                placeholder="service name"
              />
              <input
                className="border-2 p-2 w-1/3 mr-8 rounded"
                type="number"
                {...register("price")}
                placeholder="service price"
              />
            </div>

            <div>
              <input
                className="border-2 p-2 w-1/3 mr-8 rounded"
                {...register("describe")}
                placeholder="service details"
              />
              <input
                className="border-2 p-2 w-1/3 mr-8 rounded"
                {...register("img")}
                placeholder="img url"
              />
            </div>

            <input
              className="p-2 btn-design mx-16 xl:mx-64 lg:mx-64  my-4 text-white font-bold rounded"
              type="submit"
            />
          </form>
        </div>
        <div></div>
      </div>
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

export default AddService;
