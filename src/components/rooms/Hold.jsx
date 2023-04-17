import RoomHeader from "../RoomHeader";
import UnderConstruction from "../UnderConstruction";

const Hold = () => {
  return (
    <div className="room hold animated">
      <RoomHeader
        image="/images/hold.webp"
        roomName="Soute"
        description="Mes réalisations"
      />
      <UnderConstruction />
    </div>
  );
};

export default Hold;
