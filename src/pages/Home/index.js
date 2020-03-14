import React from "react";
// import "./home.scss";
import { useParams } from "react-router-dom";
import ListPost from "./ListPost";
import SideBar from "../../components/SideBar/index";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const StyledHome = styled.div`
  .main {
    display: flex;
    justify-content: center;
    .posts {
      width: 65%;
    }
    .about-content {
      display: none;
    }
    @media only screen and (max-width: 800px) {
      .about-content {
        display: none;
      }
      .posts {
        width: 100%;
      }
    }
  }

  .text-progress {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-align: center;
    margin-top: 100px;
  }
`;

export default Home => {
  let param = useParams();
  return (
    <StyledHome>
      <Helmet>
        <meta name="description" content="Lorem ipsum" />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://hirany.netlify.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${
          param.cat
            ? `${param.cat.charAt(0).toUpperCase() + param.cat.slice(1)} | `
            : ""
        }A little Hirany`} />
        <meta property="og:description" content={"Chào, mình là Nhã aka Hirant. Đây là nơi chưa mấy thứ nhảm nhí của mình"} />
        <meta property="og:url" content="https://hirany.netlify.com" />
        <meta property="og:site_name" content="A little Hirany" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
      </Helmet>
      <div className="main">
        <div className="posts">
          <ListPost cat={param.cat || ""} />
        </div>
        <div className="about-content">
          <SideBar />
        </div>
      </div>
    </StyledHome>
  );
};
