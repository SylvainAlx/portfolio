import RoomHeader from "../RoomHeader";
import Background from "../works/Background";
import DragonSlayer from "../works/DragonSlayer";
import Portfolio from "../works/Portfolio";
import TarotManager from "../works/TarotManager";
import MultiversGame from "../works/MultiversGame";
import Archipel from "../works/Archipel";
import { speak } from "../../store";

const Engine = () => {
  const langage = speak.use();
  return (
    <div className="room animated" id="engine">
      <RoomHeader
        image="/images/engine.webp"
        roomName={langage === "french" ? "Salle des machines" : "Engine room"}
        description={langage === "french" ? "Réalisations" : "Accomplishments"}
      />
      <div className="sectionContainer">
        <MultiversGame langage={langage} />
        <Portfolio langage={langage} />
        <Archipel langage={langage} />

        {/* <Background langage={langage} />
        <TarotManager langage={langage} />
        <DragonSlayer langage={langage} /> */}
      </div>
    </div>
  );
};

export default Engine;
