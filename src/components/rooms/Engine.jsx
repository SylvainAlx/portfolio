import RoomHeader from "../RoomHeader";
import {
  SiSass,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiAdobephotoshop,
  SiWordpress,
} from "react-icons/si";

const Engine = () => {
  return (
    <div className="room animated" id="engine">
      <RoomHeader
        image="/images/engine.webp"
        roomName="Salle des machines"
        description="Technologies utilisées"
      />
      <section className="technos animated">
        <div className="techno">
          <SiReact className="icon" />
          React
        </div>
        <div className="techno">
          <SiNodedotjs className="icon" />
          Node.js
        </div>
        <div className="techno">
          <SiJavascript className="icon" />
          JavaScript
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
          <SiWordpress className="icon" />
          WordPress
        </div>
        <div className="techno">
          <SiAdobephotoshop className="icon" />
          Photoshop
        </div>
      </section>
    </div>
  );
};

export default Engine;
