import RoomHeader from "../RoomHeader";
import Button from "../Button";

const Communication = () => {
  const handleClick = (e) => {
    const link = e.currentTarget.getAttribute("id");
    const name = e.currentTarget.getAttribute("name");
    console.log(name);
    name !== null ? window.open(`mailto:${link}`) : window.open(link, "_blank");
  };
  return (
    <div className="room animated" id="communication">
      <RoomHeader
        image="/images/communication.webp"
        roomName="Salle des communications"
        description="Me contacter"
      />
      <div className="buttonContainer">
        <Button text="email" name="mail" id="sylval49@gmail.com" />
        <Button
          text="GitHub"
          name="github"
          id="https://github.com/SylvainAlx"
        />
        <Button
          text="LinkedIn"
          name="linkedin"
          id="https://www.linkedin.com/in/sylvain-alx/"
        />
        <Button
          name="place"
          id="https://www.google.fr/maps/place/Angers/"
          text="Angers, France"
        />
      </div>
    </div>
  );
};

export default Communication;
