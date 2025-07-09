import { useState } from "react";
import Button from "../Button";
import { SiNextdotjs, SiTailwindcss, SiGooglecloud } from "react-icons/si";
import Modal from "../Modal";
import Techno from "../Techno";

const MultiversGame = ({ langage }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const multiversGame = {
    title: "Moult'Univers Game",
    description:
      langage === "french"
        ? "Escape game & Huis Clos à domicile"
        : "Home escape games",
    image: "./images/multiversGame.webp",
    github: "",
    web: "https://www.moultunivers-game.fr",
  };
  return (
    <section className="work animated">
      <h4>{multiversGame.title}</h4>
      <p>{multiversGame.description}</p>

      <Modal
        work={multiversGame}
        zoomImage={zoomImage}
        setZoomImage={setZoomImage}
      />
      <div className="technos animated">
        <Techno rank={2}>
          <SiNextdotjs className="icon" />
          Next.js
        </Techno>
        <Techno rank={2}>
          <SiTailwindcss className="icon" />
          Tailwind CSS
        </Techno>
        <Techno rank={1}>
          <SiGooglecloud className="icon" />
          Google Cloud
        </Techno>
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
