import { useState } from "react";
import Button from "../Button";
import {
  SiNextdotjs,
  SiVercel,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import PortalExample from "../PortalExample";
import UnderConstruction from "../UnderConstruction";

const MultiversGame = () => {
  const [zoomImage, setZoomImage] = useState(false);
  const multiversGame = {
    title: "Multivers Game",
    description: "Escape game à domicile",
    image: "",
    github: "",
    web: "",
  };
  return (
    <section className="work animated">
      <h4>{multiversGame.title}</h4>
      <p>{multiversGame.description}</p>
      <UnderConstruction />
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
          <SiPostgresql className="icon" />
          PostgreSQL
        </div>
      </div>
      <div className="buttonContainer animated"></div>
    </section>
  );
};

export default MultiversGame;
