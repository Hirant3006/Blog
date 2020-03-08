import React from "react";
import styled from "styled-components";

const StyledSideBar = styled.div`
  background: white;
  font-family: beVietNam, serif;
  img {
    width: 100%;
  }
  .sidebar-wrapper {
    padding: 20px;
  }
  .title {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .social-links {
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin: 20px 20px 20px 20px;
    .facebook:hover {
      color: #3578e5;
    }
    .linkedin:hover {
      color: #0077b5;
    }
    .instagram:hover {
      color: #c1c1be;
    }
    a {
      color: #000;
      padding: 0px 20px;
    }
    a:not(:last-child) {
      border-right: 1px solid #000;
    }
  }
`;

const SideBar = () => {
  return (
    <StyledSideBar className="about-me">
      <img alt='Nhã "Hirant" Lý' src={require("../../assets/img.jpg")} />
      <div className="sidebar-wrapper">
        <div className="title">
          Chào, mình là <b style={{ color: "#e13d3d" }}>Nhã</b>
        </div>
        <div className="content">
          <div>
            Đây là nơi chứa mấy thứ nhảm nhí của mình.
            <br /> <br />
            {/* <div style={{textAlign:'center'}}> */}
            <div  style={{ textAlign: "center" }}>
              Indie Song &nbsp;&nbsp; Phim ảnh&nbsp;&nbsp;
              <br />
            </div>
            <div  style={{ textAlign: "center" }}>
              Front-end Web &nbsp;&nbsp; UI/UX
            </div>
            {/* </div> */}
          </div>
          <div>
            {" "}
            <br />
            Hiện tại ở đây vẫn chưa hoàn thiện mà cũng không có mấy content, nên
            nếu hứng thú với mấy thứ ở trên hay mấy bài viết thì liên lạc với
            mình ha :>
          </div>
          <div className="social-links">
            <a
              className="facebook"
              href="https://www.facebook.com/Hirantinsleep"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/nh%C3%A3-l%C3%BD-980879138/  "
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="instagram" href="https://www.instagram.com/_hirant_/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
