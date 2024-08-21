import { useState } from "react";
import Button from "../Button";
import {
  SiTailwindcss,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import PortalExample from "../PortalExample";
import UnderConstruction from "../UnderConstruction";

const Navir = ({ langage }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const navir = {
    title: "Projet Archipel",
    description:
      langage === "french"
        ? "Le réseau des nations virtuelles"
        : "Network of virtual nations",
    image: "./images/archipel.webp",
    github: "",
    web: "",
  };
  return (
    <section className="work animated">
      <h4>{navir.title}</h4>
      <p>{navir.description}</p>

      <PortalExample
        work={navir}
        zoomImage={zoomImage}
        setZoomImage={setZoomImage}
      />
      <div className="technos animated">
        <div className="techno">
          <SiReact className="icon" />
          React
        </div>
        <div className="techno">
          <SiTailwindcss className="icon" />
          Tailwind CSS
        </div>
        <div className="techno">
          <SiTypescript className="icon" />
          TypeScript
        </div>
        <div className="techno">
          <SiNodedotjs className="icon" />
          Node.js
        </div>
        <div className="techno">
          <SiMongodb className="icon" />
          MongoDB
        </div>
      </div>
      <div className="buttonContainer animated">
        <UnderConstruction langage={langage} />
      </div>
    </section>
  );
};

export default Navir;
