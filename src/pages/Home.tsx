import React from "react";
import MainArea from "../components/MainArea";
import Nav from "../components/Nav";

const Home_1: React.FC = () => {
  return <div></div>;
};

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Nav />
      <h2>Typing Test</h2>
      <MainArea />
    </div>
  );
};

export default Home;
