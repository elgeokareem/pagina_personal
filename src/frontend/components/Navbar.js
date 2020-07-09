import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

//Import CSS
import "../../backend/public/CSS/navbar.css"

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

/* La razon por la que no se pasan los iconos directamente
en el componente NavItem es porque algunos componentes
tendran dropdown */
export function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main"); //settings animations
  const [menuHeight, setMenuHeight] = useState(null); //DOM element

  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{height: menuHeight}}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={
              <i className="fa fa-free-code-camp" aria-hidden="true"></i>
            }
            rightIcon={<i className="fa fa-quora" aria-hidden="true"></i>}
          >
            <p>My profile</p>
          </DropdownItem>

          <DropdownItem
            leftIcon={<i className="fa fa-sliders" aria-hidden="true"></i>}
            rightIcon={<i class="fa fa-arrow-right" aria-hidden="true"></i>}
            goToMenu="settings"
          >
            <p>Settings</p>
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* SEGUNDO MENU */}
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<i class="fa fa-arrow-left" aria-hidden="true"></i>}
            goToMenu="main"
          >
            Settings
          </DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
