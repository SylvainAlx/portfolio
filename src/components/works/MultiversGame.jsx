import { useState } from "react";
import Button from "../Button";
import { SiNextdotjs, SiTailwindcss, SiGooglecloud } from "react-icons/si";
import PortalExample from "../PortalExample";

const MultiversGame = ({ langage }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const multiversGame = {
    title: "Moult'Univers Game",
    description:
      langage === "french" ? "Escape games à domicile" : "Home escape games",
    image: "./images/multiversGame.webp",
    github: "",
    web: "https://www.moultunivers-game.fr",
  };
  return (
    <section className="work animated">
      <h4>{multiversGame.title}</h4>
      <p>{multiversGame.description}</p>

      <PortalExample
        work={multiversGame}
        zoomImage={zoomImage}
        setZoomImage={setZoomImage}
      />
      <div className="technos animated">
        <div className="techno">
          <SiNextdotjs className="icon" />
          Next.js
        </div>
        <div className="techno">
          <SiTailwindcss className="icon" />
          Tailwind CSS
        </div>
        <div className="techno">
          <SiGooglecloud className="icon" />
          Google Cloud
        </div>
      </div>
      <div className="buttonContainer animated">
        {multiversGame.web && (
          <Button text="voir le site" id={multiversGame.web} />
        )}
      </div>
    </section>
  );
};

export default MultiversGame;
