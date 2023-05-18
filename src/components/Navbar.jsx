import { useState } from "react";
import { ImMenu } from "react-icons/im";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="navbar">
      <div
        className={`burgerMenu ${showNav ? "active" : ""}`}
        onClick={() => setShowNav(!showNav)}
      >
        <ImMenu />
      </div>
      <nav
        onClick={() => setShowNav(!showNav)}
        className={showNav ? "show" : "hidden"}
      >
        <a href="#crew">
          <img src="./images/portrait.webp" />
          Quartier de l'équipage
        </a>
        <a href="#communication">
          <img src="./images/communication.webp" />
          Salle des communications
        </a>
        <a href="#bridge">
          <img src="./images/bridge.webp" />
          Salle de contrôle
        </a>
        <a href="#hold">
          <img src="./images/hold.webp" />
          Soute
        </a>
        <a href="#engine">
          <img src="./images/engine.webp" />
          Salle des machine
        </a>
        <a href="#laboratory">
          <img src="./images/laboratory.webp" />
          Laboratoire
        </a>
        <a href="#photography">
          <img src="./images/photo.webp" />
          Studio photo
        </a>
        <a href="#observatory">
          <img src="./images/observatory.webp" />
          Observatoire
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
