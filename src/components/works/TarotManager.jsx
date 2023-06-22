import { useState } from "react";
import Button from "../Button";
import {
  SiSass,
  SiNextdotjs,
  SiMongodb,
  SiVercel,
  SiPwa,
} from "react-icons/si";
import PortalExample from "../PortalExample";

const TarotManager = () => {
  const [zoomImage, setZoomImage] = useState(false);
  const tarotManager = {
    title: "Tarot Manager",
    description:
      "!! EN CONSTRUCTION !! Gestionnaire de parties de tarot et classement général des joueurs",
    image: "./images/tarotManager.webp",
    github: "https://github.com/SylvainAlx/tarot-manager",
    web: "https://tarot-manager.vercel.app/",
  };
  return (
    <section className="work animated">
      <h4>{tarotManager.title}</h4>
      <p>{tarotManager.description}</p>
      <PortalExample
        work={tarotManager}
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
          <SiSass className="icon" />
          SASS
        </div>
        <div className="techno">
          <SiMongodb className="icon" />
          MongoDB
        </div>
        <div className="techno">
          <SiPwa className="icon" />
          Progressive Web App
        </div>
      </div>
      <div className="buttonContainer">
        <Button text="code source" name="github" id={tarotManager.github} />
        {tarotManager.web && <Button text="voir" id={tarotManager.web} />}
      </div>
    </section>
  );
};

export default TarotManager;
