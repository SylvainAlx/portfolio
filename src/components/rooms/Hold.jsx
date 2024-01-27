import RoomHeader from "../RoomHeader";
import MultiversGame from "../works/MultiversGame";
import Navir from "../works/Navir";
import { speak } from "../../store";

const Hold = () => {
  const langage = speak.use();
  return (
    <div className="room animated" id="hold">
      <RoomHeader
        image="/images/hold.webp"
        roomName={langage === "french" ? "Soute" : "hold"}
        description={
          langage === "french" ? "Références" : "Professional references"
        }
      />
      <div className="sectionContainer">
        <MultiversGame langage={langage} />
        <Navir langage={langage} />
      </div>
    </div>
  );
};

export default Hold;
