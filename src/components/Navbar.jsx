import { useState } from "react";
import { FaSpaceShuttle } from "react-icons/fa";
import { speak } from "../store";

const Navbar = () => {
  const langage = speak.use();
  const [showNav, setShowNav] = useState(false);

  const handleNavigationClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
        <a href="#crew" onClick={handleNavigationClick}>
          <img src="./images/portrait.webp" />
          {langage === "french" ? "À propos" : "About me"}
        </a>
        <a href="#communication" onClick={handleNavigationClick}>
          <img src="./images/communication.webp" />
          Contact
        </a>
        <a href="#bridge" onClick={handleNavigationClick}>
          <img src="./images/bridge.webp" />
          {langage === "french" ? "Parcours" : "Background"}
        </a>
        {/* <a href="#hold" onClick={handleNavigationClick}>
          <img src="./images/hold.webp" />
          {langage === "french" ? "Références" : "References"}
        </a> */}
        <a href="#engine" onClick={handleNavigationClick}>
          <img src="./images/engine.webp" />
          {langage === "french" ? "Réalisations" : "Accomplishments"}
        </a>
        <a href="#observatory" onClick={handleNavigationClick}>
          <img src="./images/observatory.webp" />
          Passions
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
