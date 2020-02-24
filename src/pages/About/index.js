import React from "react";
import SideBar from "../../components/SideBar/index";
import { ReactTitle } from "react-meta-tags";
import styled from "styled-components";

const StyledAbout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .wrapper-about-me {
    width: 30%;
  }
  @media only screen and (max-width: 800px) {
    .wrapper-about-me {
      width: 100%;
    }
  }
`;

export default About => {
  return (
    <StyledAbout >
      <ReactTitle title={`About |  A little Hirany`} />
      <div className="wrapper-about-me">
        <SideBar className="sidebar" />
      </div>
    </StyledAbout>
  );
};
