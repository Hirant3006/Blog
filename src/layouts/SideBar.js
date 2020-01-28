import React from "react";
import "./sidebar.scss";

const SideBar = () => {
  return (
    <div className="about">
      <img alt='Nhã "Hirant" Lý' src={require("../assets/img.jpg")} />
      <div className="title p-20">
        Chào, mình là <b style={{ color: "#e13d3d" }}>Nhã</b>
      </div>
      <div className="content">
        <div>
          Đây là nơi chứa mấy thứ nhảm nhí của mình.
          <br /> <br />
          {/* <div style={{textAlign:'center'}}> */}
          Indie Song &nbsp;&nbsp;  Classic Movies &nbsp;&nbsp;  Novel Books <br/>
          <div className="mt-5" style={{textAlign:'center'}}>Front-end Web &nbsp;&nbsp; UI/UX</div>
          {/* </div> */}
        </div>
        <div>
          {" "}
          <br />
          Hiện tại ở đây vẫn chưa hoàn thiện mà cũng không có mấy content, nên nếu
          hứng thú với mấy thứ ở trên hay mấy bài viết thì liên lạc với mình ha :>
        </div>
        <div className="social-links mt-20 mb-30">
          <a className="facebook" href="https://www.facebook.com/Hirantinsleep"><i className="fab fa-facebook-f"></i></a>
          <a className="linkedin" href="https://www.linkedin.com/in/nh%C3%A3-l%C3%BD-980879138/  "><i className="fab fa-linkedin"></i></a>
          <a className="instagram" href="https://www.instagram.com/_hirant_/"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
