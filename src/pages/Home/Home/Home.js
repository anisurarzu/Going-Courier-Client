import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Banner from "../Banner/Banner";
import Count from "../Count/Count";

import "./Home.css";

import Services from "../Services/Services";
import Support from "../Support/Support";
import Team from "../Team/Team";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Count></Count>
      <Support></Support>
      <Team></Team>
    </div>
  );
};

export default Home;
