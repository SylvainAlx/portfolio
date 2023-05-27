import { useState } from "react";
import { ImMenu } from "react-icons/im";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavigationClick = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Défilement fluide
        block: "start", // Défilement jusqu'au début de l'élément
      });
    }
  };

  return (
    <div className="navbar" onMouseLeave={() => setShowNav(false)}>
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
        <a href="#crew" onClick={handleNavigationClick}>
          <img src="./images/portrait.webp" />
          Sylvain ALEXANDRE
        </a>
        <a href="#communication" onClick={handleNavigationClick}>
          <img src="./images/communication.webp" />
          Me contacter
        </a>
        <a href="#bridge" onClick={handleNavigationClick}>
          <img src="./images/bridge.webp" />
          Parcours et ambitions
        </a>
        <a href="#engine" onClick={handleNavigationClick}>
          <img src="./images/engine.webp" />
          Mes réalisations
        </a>
        <a href="#laboratory" onClick={handleNavigationClick}>
          <img src="./images/laboratory.webp" />
          En cours d'apprentissage
        </a>
        <a href="#photography" onClick={handleNavigationClick}>
          <img src="./images/photo.webp" />
          Ma pratique de la photographie
        </a>
        <a href="#observatory" onClick={handleNavigationClick}>
          <img src="./images/observatory.webp" />
          Ma passion pour l'astronomie
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
