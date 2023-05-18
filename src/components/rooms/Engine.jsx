import RoomHeader from "../RoomHeader";
import {
  SiSass,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiAdobephotoshop,
  SiWordpress,
  SiAdobelightroom,
  SiProtools,
} from "react-icons/si";

const Engine = () => {
  return (
    <div className="room animated" id="engine">
      <RoomHeader
        image="/images/engine.webp"
        roomName="Salle des machines"
        description="Technologies utilisées"
      />
      <div className="sectionContainer">
        <section className="technos animated">
          <h4>technologies web</h4>
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
        </section>
        <section className="technos animated">
          <h4>autres technologies informatiques</h4>
          <div className="techno">
            <SiAdobephotoshop className="icon" />
            Photoshop
          </div>
          <div className="techno">
            <SiAdobelightroom className="icon" />
            Lightroom
          </div>
          <div className="techno">
            <SiProtools className="icon" />
            ProTools
          </div>
        </section>
      </div>
    </div>
  );
};

export default Engine;
