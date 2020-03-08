import React, { useEffect, useState } from "react";
import "../assets/scss/common.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import StyledApp from "./styledApp";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Router from "../router/";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ThemeContextProvider from "./ThemeContext";

const DropdownNavKeyframes = keyframes`
  0% {
    height: 0px;
    opacity: 0;
  }
  100% {
    opacity: 1;
    height: 160px;
}`;

const UnDropdownNavKeyframes = keyframes`
  0% {
    opacity: 1;
    height: 160px;
  }
  100% {
    opacity: 0;
    height: 0px;
}`;

library.add(fab, faSearch, faBars);

const NavigateList = [
  { name: "CODING", cat: "code", path: "/category/code" },
  { name: "UI/UX", cat: "uiux", path: "/category/uiux" },
  { name: "NHẢM NHÍ", cat: "life", path: "/category/life" },
  { name: "PHIM ẢNH", cat: "movie", path: "/category/movie" },
  { name: "ABOUT", cat: "about", path: "/about" }
];

function App(props) {
  const [isDropDown, setDropDown] = useState("start");
  const [DropDownAni, setDropDownAni] = useState(styled.div``);

  useEffect(() => {
    if (isDropDown === false)
      setDropDownAni(styled.div`
        animation: ${DropdownNavKeyframes} 1s linear 0s;
        animation-fill-mode: forwards;
      `);
    else if (isDropDown === true)
      setDropDownAni(styled.div`
        animation: ${UnDropdownNavKeyframes} 1s linear 0s;
        animation-fill-mode: forwards;
      `);
    else setDropDownAni(styled.div``);
  }, [isDropDown]);

  const isPickCat = cat => {
    if (window.location.pathname.indexOf(cat) !== -1)
      return { color: "#e13d3d" };
    return;
  };

  const NavigateComp = NavigateList.map((item, index) => (
    <a
      key={index}
      className="ml-20"
      href={item.path}
      style={isPickCat(item.cat)}
    >
      {item.name}
    </a>
  ));

  // useEffect(()=> {
  //   console.log(path())
  // },[])
  // console.log(displayMobileNav, setDisplayMobieNav);
  return (
    <ThemeContextProvider>
      <StyledApp className="mt-40">
        <header>
          <span>
            <Link className="logo" to="/">
              A LITTLE HIRANY
            </Link>
          </span>
          <nav className="navbar mt-10">
            {NavigateComp}
            <a href="/" className="ml-20">
              <h3>
                <FontAwesomeIcon icon="search" />
              </h3>
            </a>
          </nav>
          <nav className="mobile-navbar mt-10">
            <a href=" " onClick={() => setDropDown(!isDropDown)}>
              <FontAwesomeIcon icon="bars" className="mr-5" />
              MENU
            </a>
            <a href="/" className="ml-20">
              <h3>
                <FontAwesomeIcon icon="search" />
              </h3>
            </a>
          </nav>
          <div className="border"></div>
          <DropDownAni className="mt-10 mobile-navbar-dropdown">
            {NavigateComp}
          </DropDownAni>
        </header>
        <div className="mt-20">
          <Router />
        </div>
      </StyledApp>
    </ThemeContextProvider>
  );
}

export default App;
