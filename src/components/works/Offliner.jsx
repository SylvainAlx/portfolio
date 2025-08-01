import Techno from "../Techno";
import UnderConstruction from "../UnderConstruction";
import { SiExpo, SiTypescript, SiSupabase, SiPostgresql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import Button from "../Button";

const Offliner = ({ langage }) => {
  const offlineTracker = {
    title: "Offliner",
    description:
      langage === "french"
        ? "L'application mobile qui compte et encourage le temps passé hors ligne"
        : "The mobile app that counts and encourages time spent offline",
    image: "",
    github: "https://github.com/SylvainAlx/offliner",
    web: "",
  };
  return (
    <section className="work animated">
      <h4>{offlineTracker.title}</h4>
      <p>{offlineTracker.description}</p>
      <UnderConstruction langage={langage} />
      <div className="technos animated">
        <Techno rank={1}>
          <SiExpo className="icon" />
          Expo
        </Techno>
        <Techno rank={1}>
          <FaReact className="icon" />
          React Native
        </Techno>
        <Techno rank={3}>
          <SiTypescript className="icon" />
          TypeScript
        </Techno>
        <Techno rank={1}>
          <SiSupabase className="icon" />
          Supabase
        </Techno>
        <Techno rank={2}>
          <SiPostgresql className="icon" />
          PostgreSQL
        </Techno>
      </div>
      <div className="buttonContainer animated">
        <Button text="code source" name="github" id={offlineTracker.github} />
        {offlineTracker.web && (
          <Button text="voir le site" id={offlineTracker.web} />
        )}
      </div>
    </section>
  );
};

export default Offliner;
