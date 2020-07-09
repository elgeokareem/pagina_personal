import React from "react";

//Components
import Navbar_2 from "./Navbar/Navbar_2"
import SimpleSlider from "./SimpleSlider";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Separador />
      {/* <SimpleSlider /> */}
      <Footer />
    </div>
  );
}

function Separador() {
  return (
    <div style={{ height: "300px" }}>
      I provide solutions for your business with the lastest technologies
      avaliables
    </div>
  );
}

