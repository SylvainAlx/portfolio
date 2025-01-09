import { useState } from "react";
import {
  SiTailwindcss,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiI18Next,
  SiVite,
} from "react-icons/si";
import PortalExample from "../PortalExample";
import UnderConstruction from "../UnderConstruction";
import Button from "../Button";

const Archipel = ({ langage }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const archipel = {
    title: "Archipel",
    description:
      langage === "french"
        ? "Citoyens des micronations & nations virtuelles"
        : "Citizens of micronations & virtual nations",
    image: "./images/archipel.webp",
    github: "https://github.com/SylvainAlx/archipel",
    web: "https://archipel.vercel.app/",
  };
  return (
    <section className="work animated">
      <h4>{archipel.title}</h4>
      <p>{archipel.description}</p>

      <PortalExample
        work={archipel}
        zoomImage={zoomImage}
        setZoomImage={setZoomImage}
      />
      <div className="technos animated">
        <div className="techno">
          <SiReact className="icon" />
          React
        </div>
        <div className="techno">
          <SiVite className="icon" />
          Vite
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
          <SiI18Next className="icon" />
          I18Next
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
      <div className="buttonContainer animated">
        <Button text="code source" name="github" id={archipel.github} />
        {archipel.web && <Button text="voir" id={archipel.web} />}
      </div>
    </section>
  );
};

export default Archipel;
