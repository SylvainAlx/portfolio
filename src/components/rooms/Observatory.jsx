import Hobby from "../Hobby";
import RoomHeader from "../RoomHeader";
import UnderConstruction from "../UnderConstruction";

const Observatory = () => {
  return (
    <div className="room animated" id="observatory">
      <RoomHeader
        image="/images/observatory.webp"
        roomName="Observatoire"
        description="Mes passions"
      />
      <UnderConstruction />
      <div className="sectionContainer">
        <Hobby hobby={"astronomie"} />
        <Hobby hobby={"photographie"} />
        <Hobby hobby={"jardinage"} />
      </div>
    </div>
  );
};

export default Observatory;
