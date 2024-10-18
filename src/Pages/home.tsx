import React from "react";
import "./home.css";
import Discount from "../components/discount";
import Navbar from "../components/navbar";
import Header from "../components/header";

const Home = () => {
  return (
    <div className="Home">
      <Discount />
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
