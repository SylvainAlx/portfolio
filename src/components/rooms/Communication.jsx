import RoomHeader from "../RoomHeader";
import Button from "../Button";
import { speak } from "../../store";

const Communication = () => {
  const width = window.innerWidth;
  const langage = speak.use();

  return (
    <div className={`room ${width < 500 ? "animated" : ""}`} id="communication">
      <RoomHeader
        image="/images/communication.webp"
        roomName={
          langage === "french"
            ? "Salle des communications"
            : "Communication room"
        }
        description={langage === "french" ? "Me contacter" : "Contact me"}
      />
      <div className={`buttonContainer ${width < 500 ? "animated" : ""}`}>
        <Button
          text="email"
          name="mail"
          id="contact@alx-solutions-numeriques.fr"
        />
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
          id="https://www.google.fr/maps/place/Loire-Authion/"
          text="Loire-Authion (49), France"
        />
      </div>
    </div>
  );
};

export default Communication;
