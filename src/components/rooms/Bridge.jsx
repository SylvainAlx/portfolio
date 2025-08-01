import RoomHeader from "../RoomHeader";
import "../../assets/scss/Room.scss";
import { speak } from "../../store";
import ComputerScience from "../bridge/ComputerScience";
import Background from "../bridge/Background";

const Bridge = () => {
  const width = window.innerWidth;
  const langage = speak.use();

  return (
    <div className={`room ${width < 500 ? "animated" : ""}`} id="bridge">
      <RoomHeader
        image="/images/bridge.webp"
        roomName={langage == "french" ? "Salle de contrôle" : "Control room"}
        description={langage == "french" ? "Parcours" : "Background"}
      />
      <div className="sectionContainer">
        <ComputerScience langage={langage} />
        <Background langage={langage} />
      </div>
    </div>
  );
};

export default Bridge;