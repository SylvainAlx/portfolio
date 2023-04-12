import RoomHeader from "./RoomHeader";
import Button from "../Button";
import "../../assets/scss/room.scss";

const Bridge = () => {
  return (
    <div className="room bridge">
      <RoomHeader
        image="src/assets/images/bridge.jpg"
        roomName="Salle de contrôle"
        description="Parcours et ambitions"
      />
      <div className="sections">
        <section>
          <h4>d'où je viens</h4>
          <ul>
            <li>2023 - BAC+2 Developpeur web full-stack</li>
            <li>2017-2022 - Assistant d'éducation</li>
            <li>2017-2019 - Photographe freelance</li>
            <li>2011-2016 - Technicien Canal+</li>
            <li>2010 - BAC+2 Audiovisuel</li>
          </ul>
        </section>
        <section>
          <h4>d'où je viens</h4>
          <ul>
            <li>développeur web fullstack React/Node.js</li>
            <li>developpeur WordPress</li>
            <li>developpeur Front-End</li>
            <li>intégrateur web</li>
          </ul>
        </section>
      </div>
      <Button text={"télécharger mon CV"} />
    </div>
  );
};

export default Bridge;
