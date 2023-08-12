import RoomHeader from "../RoomHeader";
import Background from "../works/Background";
import DragonSlayer from "../works/DragonSlayer";
import Portfolio from "../works/Portfolio";
import TarotManager from "../works/TarotManager";
import { speak } from "../../store";

const Engine = () => {
  const langage = speak.use();
  return (
    <div className="room animated" id="engine">
      <RoomHeader
        image="/images/engine.webp"
        roomName={langage === "french" ? "Salle des machines" : "Engine room"}
        description={
          langage === "french" ? "Projets personnels" : "Personnal projects"
        }
      />
      <div className="sectionContainer">
        <Background langage={langage} />
        <TarotManager langage={langage} />
        <Portfolio langage={langage} />
        <DragonSlayer langage={langage} />
      </div>
    </div>
  );
};

export default Engine;
