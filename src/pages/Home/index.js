import React from "react";
import "./home.scss";
import { useParams } from "react-router-dom";
import ListPost from "./ListPost";
import SideBar from "../../components/SideBar/index";
import MetaTags from "react-meta-tags";
import {ReactTitle} from 'react-meta-tags';

export default Home => {
  let param = useParams();
  return (
    <div className="main">
      <ReactTitle title={`${param.cat ? `${param.cat.charAt(0).toUpperCase() + param.cat.slice(1)} | `: ''}A little Hirany`}/>
      <div className="posts">
        <ListPost cat={param.cat || ""} />
      </div>
      <div className="about-content">
        <SideBar />
      </div>
      <MetaTags>
        <meta name="description" content="Chào, mình là Nhã aka Hirant. Đây là nơi chưa mấy thứ nhảm nhí của mình"/>
        <meta property="og:title" content="A little Hirany" />
      </MetaTags>
    </div>
  );
};
