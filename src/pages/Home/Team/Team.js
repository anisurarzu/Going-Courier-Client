import React from "react";
import "./Team.css";
import team1 from "../../../image/team/pexels-artem-podrez-5025641.jpg";
import team2 from "../../../image/team/pexels-rodnae-productions-7362853.jpg";
import team3 from "../../../image/team/pexels-rodnae-productions-7362960.jpg";
const Team = () => {
  return (
    <div className="support xl:px-44 lg:px-44 md:px-32 sm:py-8 xl:py-16 lg:py-16">
      <h2 className="tracking-wider text-3xl font-bold xl:text-5xl lg:text-5xl md:text-4xl  lg:font-bold md:font-bold sm:font-bold  pb-8">
        Our Team
      </h2>
      <p className="px:8 pb:8 xl:text-xl lg:text-xl text-gray-900 xl:pb-24 lg:pb-24 xl:px-32 lg:px-32 xl:font-bold lg;font-bold ">
        "Going Courier Team are reliable for delivery of your product to your
        customer, at the right location in the right time through its efficient
        distribution management."
      </p>
      <div className="grid gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {/* card-1 */}
        <div
          data-aos="fade-down"
          className="grid justify-center items-center xl:shadow-lg lg:shadow-lg
          sm:shadow-lg "
        >
          <div className="flex items-center justify-center pt-4">
            <img
              className="lg:object-cover h-28 w-28 rounded-full"
              src={team2}
              alt=""
            />
          </div>
          <h3 className="text-2xl xl:text-2xl lg:text-2xl md:text-2xl font-bold text-gray-700 pt-4">
            Anis Hamza
          </h3>
          <small className="mx-32 text-white py-1 ">Courier Person</small>
          <p className="text-gray-600 px-8 py-4">
            Going Courier Boy are reliable for delivery of your product to your
            customer, at the right location in the right time through its
            efficient distribution management.
          </p>
          <div className="grid grid-cols-4 gap-1 px-20 pb-12 icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        {/* card-2 */}
        <div
          data-aos="fade-down"
          className="grid justify-center items-center xl:shadow-lg lg:shadow-lg sm:shadow-lg"
        >
          <div className="flex items-center justify-center pt-4">
            <img
              className="lg:object-cover h-28 w-28 rounded-full"
              src={team1}
              alt=""
            />
          </div>
          <h3 className="text-2xl xl:text-2xl lg:text-2xl md:text-2xl font-bold text-gray-700 pt-4">
            David Malan
          </h3>
          <small className="mx-32 text-white py-1 ">Courier Person</small>
          <p className="text-gray-600 px-8 py-4">
            Going Courier Boy are reliable for delivery of your product to your
            customer, at the right location in the right time through its
            efficient distribution management.
          </p>
          <div className="grid grid-cols-4 gap-1 px-20 pb-12 icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        {/* card 3 */}
        <div
          data-aos="fade-down"
          className="grid justify-center items-center xl:shadow-lg lg:shadow-lg sm:shadow-lg"
        >
          <div className="flex items-center justify-center pt-4">
            <img
              className="lg:object-cover h-28 w-28 rounded-full"
              src={team3}
              alt=""
            />
          </div>
          <h3 className="text-2xl xl:text-2xl lg:text-2xl md:text-2xl font-bold text-gray-700 pt-4">
            karim Nayek
          </h3>
          <small className="mx-32 text-white py-1 ">Courier Person</small>
          <p className="text-gray-600 px-8 py-4">
            Going Courier Boy are reliable for delivery of your product to your
            customer, at the right location in the right time through its
            efficient distribution management.
          </p>
          <div className="grid grid-cols-4 gap-1 px-20 pb-12 icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
