import RoomHeader from "../RoomHeader";
import UnderConstruction from "../UnderConstruction";

const Laboratory = () => {
  return (
    <div className="room laboratory animated">
      <RoomHeader
        image="/images/laboratory.jpg"
        roomName="Laboratoire"
        description="En cours d'apprentissage"
      />
      <UnderConstruction />
    </div>
  );
};

export default Laboratory;
