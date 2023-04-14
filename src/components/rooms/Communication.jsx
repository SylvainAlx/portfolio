import RoomHeader from "../RoomHeader";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";

const Communication = () => {
  const handleClick = (e) => {
    window.open(props.link, "_blank");
  };
  return (
    <div className="room communcation animated">
      <RoomHeader
        image="/images/communication.jpg"
        roomName="Salle des communications"
        description="Me contacter"
      />
      <div className="buttonContainer">
        <div className="button animated" onClick={handleClick}>
          <AiFillMail />
          sylval49@gmail.com
        </div>
        <div className="button animated" onClick={handleClick}>
          <AiFillGithub />
          SylvainAlx
        </div>
        <div className="button animated" onClick={handleClick}>
          <AiFillLinkedin />
          Sylvain Alx
        </div>
      </div>
    </div>
  );
};

export default Communication;
