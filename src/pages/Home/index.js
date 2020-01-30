import React from "react";
import "./home.scss";
import ListPost from "./ListPost";
import SideBar from "../../components/SideBar/index";

export default Home => {
  return (
    <div className="main">
      <div className="posts">
        <ListPost />
      </div>
      <div className="about-content">
        <SideBar />
      </div>
    </div>
  );
};
