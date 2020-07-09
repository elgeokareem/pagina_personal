import React from "react";
import Navbar, { ListItem, Dropdown } from "./Navbar/Navbar_2";
/* import Navbar, {NavItem, DropdownMenu} from "./Navbar"; */
/* import PruebaRTG from "./PruebaRTG";
import Home from "./Home" */

//CSS
import "../../backend/public/CSS/main.css";

function App() {

/*   return(
    <Navbar>
      <NavItem icon={<i className="fa fa-quora" aria-hidden="true"></i>} />
      <NavItem icon={<i className="fa fa-quora" aria-hidden="true"></i>} />
      <NavItem icon={<i className="fa fa-quora" aria-hidden="true"></i>} />
    
      <NavItem icon={<i className="fa fa-quora" aria-hidden="true"></i>}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  ) */

  return (
    <Navbar>
      <ListItem
        description="William Vegas"
      />

      <ListItem
        icon={<i className="fa fa-folder-open" aria-hidden="true"></i>}
        description="Proyects"
      >
        <Dropdown />
      </ListItem>


      <ListItem
        icon={<i className="fa fa-user" aria-hidden="true"></i>}
        description="About me"
      />

      <ListItem
        icon={<i className="fa fa-address-card" aria-hidden="true"></i>}
        description="Contact"
      />
    </Navbar>
  )
}

export default App;
