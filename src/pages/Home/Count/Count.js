import React, { useEffect, useState } from "react";
import "./Count.css";

const Count = () => {
  const [count, setCount] = useState({
    client: 0,
    office: 0,
    country: 0,
    review: 0,
  });
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!scrolled && window.scrollY > 1500) {
        setScrolled(true);
      }
    });
  }, []);
  useEffect(() => {
    if (count.client < 10 && scrolled) {
      setTimeout(() => {
        let newCount = {
          client: count.client + 1,
          office: count.office + 32,
          country: count.country + 4,
          review: count.review + 12,
        };
        setCount(newCount);
      }, 100);
    }
  }, [count, scrolled]);
  return (
    <div>
      <div className="curved-upper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F8F8F8"
            fill-opacity="1"
            d="M0,96L60,122.7C120,149,240,203,360,192C480,181,600,107,720,106.7C840,107,960,181,1080,208C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="curved">
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:py-4 ">
          <div className="count-card">
            <p className="text-xl text-gray-500">Satisfied Clients</p>
            <h2 className="text-5xl font-bold pt-4 count-title">
              {count.client}M
            </h2>
          </div>
          <div className="count-card">
            <p className="text-xl text-gray-500">Offices Worldwide</p>
            <h2 className="text-5xl font-bold pt-4 count-title">
              {count.office}+
            </h2>
          </div>
          <div className="count-card">
            <p className="text-xl text-gray-500">Countries Covered</p>
            <h2 className="text-5xl font-bold pt-4 count-title">
              {count.country}+
            </h2>
          </div>
          <div>
            <p className="text-xl text-gray-500">Reviews</p>
            <h2 className="text-5xl font-bold pt-4 count-title">
              {count.review}k
            </h2>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,96L60,122.7C120,149,240,203,360,192C480,181,600,107,720,106.7C840,107,960,181,1080,208C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Count;
