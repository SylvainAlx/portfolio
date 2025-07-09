import RoomHeader from "../RoomHeader";
import Portfolio from "../works/Portfolio";
import MultiversGame from "../works/MultiversGame";
import Archipel from "../works/Archipel";
import { speak } from "../../store";
import OfflineTracker from "../works/OfflineTracker";

const Engine = () => {
  const langage = speak.use();
  return (
    <div className="room animated" id="engine">
      <RoomHeader
        image="/images/engine.webp"
        roomName={langage === "french" ? "Salle des machines" : "Engine room"}
        description={
          langage === "french"
            ? "Réalisations originales"
            : "Original creations"
        }
      />
      <div className="sectionContainer">
        <Archipel langage={langage} />
        <MultiversGame langage={langage} />
        <Portfolio langage={langage} />
        <OfflineTracker langage={langage} />
      </div>
    </div>
  );
};

export default Engine;
