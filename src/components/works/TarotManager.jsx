import { useState } from "react";
import Button from "../Button";
import { SiSass, SiNextdotjs, SiMongodb, SiVercel } from "react-icons/si";
import PortalExample from "../PortalExample";

const TarotManager = () => {
  const [zoomImage, setZoomImage] = useState(false);
  const tarotManager = {
    title: "Tarot Manager",
    description:
      "Gestionnaire de parties de tarot et classement général des joueurs",
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
