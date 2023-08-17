import { useState } from "react";
import Button from "../Button";
import {
  SiNextdotjs,
  SiVercel,
  SiTailwindcss,
  SiPostgresql,
  SiGooglecloud,
} from "react-icons/si";
import PortalExample from "../PortalExample";
import UnderConstruction from "../UnderConstruction";

const MultiversGame = ({ langage }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const multiversGame = {
    title: "Multivers Game",
    description:
      langage === "french" ? "Escape games à domicile" : "Home escape games",
    image: "./images/multiversGame.webp",
    github: "",
    web: "",
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
          <SiVercel className="icon" />
          Vercel
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
        <UnderConstruction langage={langage} />
      </div>
    </section>
  );
};

export default MultiversGame;
