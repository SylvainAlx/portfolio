import Button from "../Button";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { useState } from "react";
import PortalExample from "../PortalExample";

const DragonSlayer = () => {
  const [zoomImage, setZoomImage] = useState(false);
  const dragonSlayer = {
    title: "Dragon Slayer",
    description: "Petit jeu à base de lancés de dés",
    image: "./images/dragon-slayer.webp",
    github: "https://github.com/SylvainAlx/dragon-slayer",
    web: "https://sylvainalx.github.io/dragon-slayer",
  };
  return (
    <section className="work animated">
      <h4>{dragonSlayer.title}</h4>
      <p>{dragonSlayer.description}</p>
      <PortalExample
        work={dragonSlayer}
        zoomImage={zoomImage}
        setZoomImage={setZoomImage}
      />
      <div className="technos animated">
        <div className="techno">
          <SiJavascript className="icon" />
          JavaScript
        </div>
        <div className="techno">
          <SiHtml5 className="icon" />
          HTML
        </div>
        <div className="techno">
          <SiCss3 className="icon" />
          CSS
        </div>
      </div>
      <div className="buttonContainer animated">
        <Button text="code source" name="github" id={dragonSlayer.github} />
        {dragonSlayer.web && (
          <Button text="voir le site" id={dragonSlayer.web} />
        )}
      </div>
    </section>
  );
};

export default DragonSlayer;
