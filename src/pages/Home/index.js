import React from "react";
import "./home.scss";
import { useParams } from "react-router-dom";
import ListPost from "./ListPost";
import SideBar from "../../components/SideBar/index";

export default Home => {
  let param = useParams();
  return (
    <div className="main">
      <div className="posts">
        <ListPost cat={param.cat || ''}/>
      </div>
      <div className="about-content">
        <SideBar />
      </div>
    </div>
  );
};
