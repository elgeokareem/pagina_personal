import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

//IMPORT CSS
import "../../../backend/public/CSS/navbar_2.css";

export default function Navbar_2(props) {

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <ul className="navbar-list">
          {props.children}
        </ul>
      </nav>
    </header>
  );
}

export function ListItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="list-item">
      <div className="list-item-element" onClick={() => setOpen(!open)}>
        <div>{props.icon} {props.description}</div>
      </div>

      {open && props.children}
    </li>
  );
}

export function Dropdown() {
  const [activeMenu, setActiveMenu] = useState("main")

  useEffect(() => {
    console.log("active menu: ",activeMenu)
  },[activeMenu])

  function DropdownItem({ description, iconRight, iconLeft, goToMenu }) {
  
    return (
      <div
      className="dropdown-item"
      onClick={() => setActiveMenu(goToMenu)}
      >
        {iconLeft} {description} {iconRight}
      </div>
    );
  }

  return (
    <div className="dropdown">

      {/* Menu principal --------*/}
      <CSSTransition
      in={activeMenu === "main"}
      timeout={500}
      unmountOnExit
      classNames="menu-primary">
        <div className="menu">
          <DropdownItem
            iconRight={
              <img
                src="./icons/icons8-javascript-48.png"
                alt="JS"
                className="dropdown-icon"
              />
            }
            goToMenu="js"
            description="Javascript"
          />

          <DropdownItem
            iconRight={
              <img
                src="./icons/icons8-react-48.png"
                alt="React"
                className="dropdown-icon"
              />
            }
            description="React"
          />

          <DropdownItem
            iconRight={
              <img
                src="./icons/icons8-nodejs-48.png"
                alt="Node"
                className="dropdown-icon"
              />
            }
            description="MERN Stack"
          />

        </div>
      </CSSTransition>

      {/* Menu Javascript ----------*/}
      <CSSTransition
      in={activeMenu === "js"}
      unmountOnExit
      timeout={250}
      classNames="menu-secondary"
      >
        <div className="menu">
            <DropdownItem
            goToMenu="main"
            iconLeft={<i className="fa fa-chevron-left" aria-hidden="true"></i>}
            description="Back to proyects"
            />
            <DropdownItem description="Proyecto 1" />
            <DropdownItem description="Proyecto 2" />
            <DropdownItem description="Proyecto 3" />
            <DropdownItem description="Proyecto 4sadfasdfasd" />
            <DropdownItem description="Proyecto 5" />
            <DropdownItem description="Proyecto 6" />
            <DropdownItem description="Proyecto 6" />
            <DropdownItem description="Proyecto 6" />
            <DropdownItem description="Proyecto 6" />
            <DropdownItem description="Proyecto 6" />
            <DropdownItem description="Proyecto 6" />
            <DropdownItem description="Proyecto 6" />
            <DropdownItem description="Proyecto 6" />
            <DropdownItem description="Proyecto 6" />
        </div>
      </CSSTransition>
    </div>
  );
}