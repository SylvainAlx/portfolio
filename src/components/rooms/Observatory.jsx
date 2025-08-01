import Hobby from "../Hobby";
import RoomHeader from "../RoomHeader";
import { FaJava } from "react-icons/fa";
import { SiGodotengine, SiUnity } from "react-icons/si";
import Hashtag from "../Hashtag";
import { hobbiesData } from "../../utils/hobbiesData";
import { speak } from "../../store";

const Observatory = () => {
  const langage = speak.use();

  const icons = {
    FaJava,
    SiGodotengine,
    SiUnity,
  };

  return (
    <div className="room animated" id="observatory">
      <RoomHeader
        image="/images/observatory.webp"
        roomName={langage === "french" ? "Observatoire" : "Observatory"}
        description={langage === "french" ? "Mes passions" : "My passions"}
      />
      <div className="sectionContainer">
        {hobbiesData.map((hobby) => {
          return (
            <Hobby
              key={hobby.id}
              title={hobby.title[langage]}
              description={hobby.description ? hobby.description[langage] : ""}
              image={hobby.image}
            >
              <section>
                <div className="buttonContainer">
                  {hobby.hashtags[langage].map((tag) => (
                    <Hashtag key={tag} content={tag} />
                  ))}
                </div>
                <ul>
                  {hobby.details.map((detail) => (
                    <li key={detail.text[langage]}>
                      {detail.title && <b>{detail.title[langage]}</b>}
                      {detail.text[langage]}
                    </li>
                  ))}
                </ul>
                {hobby.technos && (
                  <div className="technos">
                    {hobby.technos.map((tech) => {
                      const Icon = icons[tech.icon];
                      return (
                        <div className="techno" key={tech.name}>
                          <Icon className="icon" />
                          {tech.name}
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            </Hobby>
          );
        })}
      </div>
    </div>
  );
};

export default Observatory;
