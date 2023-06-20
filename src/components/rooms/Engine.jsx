import RoomHeader from "../RoomHeader";
import Background from "../works/Background";
import Portfolio from "../works/Portfolio";
import TarotManager from "../works/TarotManager";

const Engine = () => {
  return (
    <div className="room animated" id="engine">
      <RoomHeader
        image="/images/engine.webp"
        roomName="Salle des machines"
        description="Mes réalisations"
      />
      <div className="sectionContainer">
        <Background />
        <TarotManager />
        <Portfolio />
      </div>
    </div>
  );
};

export default Engine;
