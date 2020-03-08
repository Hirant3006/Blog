import React from "react";
// import "./home.scss";
import { useParams } from "react-router-dom";
import ListPost from "./ListPost";
import SideBar from "../../components/SideBar/index";
import MetaTags from "react-meta-tags";
import { ReactTitle } from "react-meta-tags";
import styled from "styled-components";

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
      <MetaTags>
        <meta
          name="description"
          content="Chào, mình là Nhã aka Hirant. Đây là nơi chưa mấy thứ nhảm nhí của mình"
        />
        <meta property="og:title" content="A little Hirany" />
      </MetaTags>
      <ReactTitle
        title={`${
          param.cat
            ? `${param.cat.charAt(0).toUpperCase() + param.cat.slice(1)} | `
            : ""
        }A little Hirany`}
      />
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
