import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

//IMPORT CSS
import "../../backend/public/CSS/pruebartg.css";

export default function PruebaRTG() {
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <div className="container">
      <button
        onClick={() => {
          if (activeMenu === "main") {
            setActiveMenu("secondary");
          } else {
            setActiveMenu("main");
          }
        }}
      >
        ayy lmao
      </button>

      <div></div>

      <div className="tran-container">
        <CSSTransition
          in={activeMenu === "main"}
          unmountOnExit
          timeout={500}
          classNames="prueba"
        >
          <div className="objeto-transicion-1">{String(activeMenu)}</div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "secondary"}
          unmountOnExit
          timeout={300}
          classNames="prueba2"
        >
          <div className="objeto-transicion-2">ayy</div>
        </CSSTransition>
      </div>
    </div>
  );
}
