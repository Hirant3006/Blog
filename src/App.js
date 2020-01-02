import React, { useState } from "react";
import "./App.scss";
import "./assets/scss/common.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Router from "./router";
import { Link } from "react-router-dom";

library.add(fab, faSearch, faBars);

const NavigateList = [
  "STYLE",
  "DESIGN",
  "FOOD",
  "TRAVEL",
  "RELATIONSHIPS",
  "ABOUT"
];

function App() {
  // const [displayMobileNav, setDisplayMobieNav] = useState(false);

  const NavigateComp = NavigateList.map((item, index) =>
    item === "ABOUT" ? (
      <Link to="/about">{item}</Link>
    ) : (
      <a key={index} className="ml-20" href={`\${item}`}>{item}</a>
    )
  );
  // console.log(displayMobileNav, setDisplayMobieNav);
  return (
    <div className="App">
      <header>
        <span className="logo">
          <Link to="/">A LITTLE HIRANY</Link>
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
          <a href="/">
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
        <div className="mt-10 mobile-navbar-dropdown">{NavigateComp}</div>
      </header>
      <div className="main mt-40">
        <section>
          <Router />
        </section>
        <div className="sidebar">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum do
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default App;
