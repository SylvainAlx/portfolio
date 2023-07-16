import RoomHeader from "../RoomHeader";
import Button from "../Button";
import { speak } from "../../store";

const Communication = () => {
  const width = window.innerWidth;
  const langage = speak.use();
  const handleClick = (e) => {
    const link = e.currentTarget.getAttribute("id");
    const name = e.currentTarget.getAttribute("name");
    console.log(name);
    name !== null ? window.open(`mailto:${link}`) : window.open(link, "_blank");
  };
  return (
    <div className={`room ${width < 500 && "animated"}`} id="communication">
      <RoomHeader
        image="/images/communication.webp"
        roomName={
          langage === "french"
            ? "Salle des communications"
            : "Communication room"
        }
        description={langage === "french" ? "Me contacter" : "Contact me"}
      />
      <div className="buttonContainer animated">
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
