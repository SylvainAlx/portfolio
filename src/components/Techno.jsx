import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Techno = ({ children, rank }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="techno"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="rank">
          {Array.from({ length: rank }).map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Techno;
