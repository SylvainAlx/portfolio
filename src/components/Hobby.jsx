import { useState } from "react";
import { GiClick } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Hobby = ({ title, image, children }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="animated hobby">
      <h4>{title}</h4>
      <div
        onClick={() => setShowDescription(!showDescription)}
        className="planet"
      >
        <img src={image} alt={`planète ${title}`} />
        {showDescription && <div className="spinner"></div>}
        {!showDescription && (
          <div className="clicker">
            <GiClick />
          </div>
        )}
        {showDescription && (
          <div className="close">
            <AiOutlineCloseCircle />
          </div>
        )}
      </div>
      {showDescription && children}
    </div>
  );
};
export default Hobby;
