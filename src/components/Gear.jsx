import { FaGear } from "react-icons/fa6";
import useScrollRotation from "../hooks/useScrollRotation";

const Gear = () => {
  const rotation = useScrollRotation();
  return (
    <div className="separator">
      <FaGear
        className="gear"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
};

export default Gear;
