import { useState } from "react";
import Button from "../Button";
import { SiSass, SiNextdotjs, SiMongodb } from "react-icons/si";
import PortalExample from "../PortalExample";

const TarotManager = ({ langage }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const tarotManager = {
    title: "Tarot Manager",
    description:
      langage === "french"
        ? "Gestionnaire de parties de tarot et classement général des joueurs"
        : "Tarot game manager and overall player ranking system",
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
          <SiSass className="icon" />
          SASS
        </div>
        <div className="techno">
          <SiMongodb className="icon" />
          MongoDB
        </div>
      </div>
      <div className="buttonContainer animated">
        <Button text="code source" name="github" id={tarotManager.github} />
        {tarotManager.web && (
          <Button text="voir le site" id={tarotManager.web} />
        )}
      </div>
    </section>
  );
};

export default TarotManager;
