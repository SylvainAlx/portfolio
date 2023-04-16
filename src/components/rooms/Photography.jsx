import RoomHeader from "../RoomHeader";
import UnderConstruction from "../UnderConstruction";

const Photography = () => {
  return (
    <div className="room photography animated">
      <RoomHeader
        image="/images/photo.jpg"
        roomName="Studio photo"
        description="Ma pratique de la photographie"
      />
      <UnderConstruction />
    </div>
  );
};

export default Photography;
