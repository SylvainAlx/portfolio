import RoomHeader from "../RoomHeader";
import UnderConstruction from "../UnderConstruction";

const Observatory = () => {
  return (
    <div className="room observatory animated">
      <RoomHeader
        image="/images/observatory.webp"
        roomName="Observatoire"
        description="Ma passion pour l'astronomie"
      />
      <UnderConstruction />
    </div>
  );
};

export default Observatory;
