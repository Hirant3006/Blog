import React from "react";
import "./App.scss";
import "../assets/scss/common.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Router from "../router/";
import { Link } from "react-router-dom";
library.add(fab, faSearch, faBars);

const NavigateList = [
  { name: "CODING", cat: "code", path: "/category/code" },
  { name: "UI/UX", cat: "uiux", path: "/category/uiux" },
  { name: "NHẢM NHÍ", cat: "life", path: "/category/life" },
  { name: "PHIM ẢNH", cat: "movie", path: "/category/movie" },
  { name: "ABOUT", cat: "about", path: "/about" }
];

function App(props) {
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
    <div className="App mt-40">
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
      <div className="mt-40">
        <Router />
      </div>
    </div>
  );
}

export default App;
