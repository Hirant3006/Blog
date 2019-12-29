import React, { useState } from "react";
import "./App.scss";
import "./assets/scss/common.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faSearch, faBars);

const NavigateList = [
  "STYLE",
  "DESIGN",
  "FOOD",
  "TRAVEL",
  "RELATIONSHIPS",
  "MOTHERHOOD"
];

function App() {
  const [displayMobileNav, setDisplayMobieNav] = useState(false);

  const NavigateComp = NavigateList.map((item, index) => (
    <a key={index} className="ml-20" href={`\${item}`}>
      {item}
    </a>
  ));
  console.log(displayMobileNav);
  return (
    <div className="App">
      <header>
        <span className="logo">A LITTLE HIRANY</span>
        <nav className="navbar mt-10">
          {NavigateComp}
          <a className="ml-20">
            <h3>
              <FontAwesomeIcon icon="search" />
            </h3>
          </a>
        </nav>
        <nav className="mobile-navbar mt-10">
          <a>
            <FontAwesomeIcon icon="bars" className="mr-5" />
            MENU
          </a>
          <a className="ml-20">
            <h3>
              <FontAwesomeIcon icon="search" />
            </h3>
          </a>
        </nav>
        <div className="border"></div>
        <div className="mt-10 mobile-navbar-dropdown">{NavigateComp}</div>
      </header>
      <div className="main mt-40">
        <section className="">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </section>
        <div class="sidebar">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum do
        </div>
      </div>
    </div>
  );
}

export default App;
