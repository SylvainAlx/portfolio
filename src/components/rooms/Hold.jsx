import RoomHeader from "../RoomHeader";
import MultiversGame from "../works/MultiversGame";

const Hold = () => {
  return (
    <div className="room animated" id="hold">
      <RoomHeader
        image="/images/hold.webp"
        roomName="Soute"
        description="Références"
      />
      <div className="sectionContainer">
        <MultiversGame />
      </div>
    </div>
  );
};

export default Hold;
