// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;