import React from "react";
import SideBar from "../../components/SideBar/index";
import "./about.scss";
import {ReactTitle} from 'react-meta-tags';

export default About => {
  return (
    <div className="container">
      <ReactTitle title={`About |  A little Hirany`}/>
      <div className="wrapper-about-me">
        <SideBar className="sidebar" />
      </div>
    </div>
  );
};
