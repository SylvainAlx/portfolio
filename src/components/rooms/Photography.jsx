import RoomHeader from "../RoomHeader";
import UnderConstruction from "../UnderConstruction";

const Photography = () => {
  return (
    <div className="room animated" id="photography">
      <RoomHeader
        image="/images/photo.webp"
        roomName="Studio photo"
        description="Ma pratique de la photographie"
      />
      <UnderConstruction />
    </div>
  );
};

export default Photography;