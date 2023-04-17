import RoomHeader from "../RoomHeader";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiGit,
  SiPostman,
  SiVite,
  SiAdobephotoshop,
  SiWordpress,
} from "react-icons/si";

const Engine = () => {
  return (
    <div className="room engine animated">
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
          <SiHtml5 className="icon" />
          HTML5
        </div>
        <div className="techno">
          <SiCss3 className="icon" />
          CSS3
        </div>
        <div className="techno">
          <SiGit className="icon" />
          Git
        </div>
        <div className="techno">
          <SiMongodb className="icon" />
          MongoDB
        </div>
        <div className="techno">
          <SiPostman className="icon" />
          Postman
        </div>
        <div className="techno">
          <SiVite className="icon" />
          Vite
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
