import RoomHeader from "../RoomHeader";
import Background from "../works/Background";
import Portfolio from "../works/portfolio";

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
        <Portfolio />
      </div>
    </div>
  );
};

export default Engine;
