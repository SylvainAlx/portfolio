import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSpaceShuttle } from "react-icons/fa";
import { speak } from "../store";

const Navbar = () => {
  const langage = speak.use();
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="navbar" onMouseLeave={() => setShowNav(false)}>
      <div
        className={`burgerMenu ${showNav ? "active" : ""}`}
        onClick={() => setShowNav(!showNav)}
      >
        <FaSpaceShuttle />
      </div>
      <nav
        onClick={() => setShowNav(!showNav)}
        className={showNav ? "show" : "hidden"}
      >
        <Link to="/#crew">
          <img src="./images/portrait.webp" alt="Portrait" loading="lazy" />
          {langage === "french" ? "À propos" : "About me"}
        </Link>
        <Link to="/#communication">
          <img
            src="./images/communication.webp"
            alt="Communication"
            loading="lazy"
          />
          Contact
        </Link>
        <Link to="/#bridge">
          <img src="./images/bridge.webp" alt="Bridge" loading="lazy" />
          {langage === "french" ? "Parcours" : "Background"}
        </Link>
        <Link to="/#engine">
          <img src="./images/engine.webp" alt="Engine" loading="lazy" />
          {langage === "french" ? "Réalisations" : "Accomplishments"}
        </Link>
        <Link to="/#observatory">
          <img
            src="./images/observatory.webp"
            alt="Observatory"
            loading="lazy"
          />
          Passions
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
