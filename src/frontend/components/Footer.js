import React from "react";

//IMPORT CSS
import "../../backend/public/CSS/footer.css";

export default function Footer() {
  return (
    <footer>
			<div className="bloque-1">
				<h3>Redes sociales</h3>
			</div>

			<div className="bloque-2">
				wenas 2
			</div>

      <div className="referencias">
        Icons made by{" "}
        <a href="https://smashicons.com/" title="Smashicons">
          Smashicons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
        <a target="_blank" href="https://icons8.com/icons/set/javascript">
          JavaScript icon
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </footer>
  );
}
