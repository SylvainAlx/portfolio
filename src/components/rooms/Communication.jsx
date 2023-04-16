import RoomHeader from "../RoomHeader";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

const Communication = () => {
  const handleClick = (e) => {
    const link = e.currentTarget.getAttribute("id");
    const name = e.currentTarget.getAttribute("name");
    console.log(name);
    name !== null ? window.open(`mailto:${link}`) : window.open(link, "_blank");
  };
  return (
    <div className="room communcation animated">
      <RoomHeader
        image="/images/communication.jpg"
        roomName="Salle des communications"
        description="Me contacter"
      />
      <div className="buttonContainer">
        <div
          className="button animated"
          name="mail"
          id="sylval49@gmail.com"
          onClick={handleClick}
        >
          <AiFillMail />
        </div>
        <div
          className="button animated"
          id="https://github.com/SylvainAlx"
          onClick={handleClick}
        >
          <AiFillGithub />
        </div>
        <div
          className="button animated"
          id="https://www.linkedin.com/in/sylvain-alx/"
          onClick={handleClick}
        >
          <AiFillLinkedin />
        </div>
      </div>
      <div
        className="button animated"
        id="https://www.google.fr/maps/place/Angers/"
        onClick={handleClick}
      >
        <IoLocationSharp />
        Angers, France
      </div>
    </div>
  );
};

export default Communication;
