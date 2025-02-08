import Hashtag from "../Hashtag";
import RoomHeader from "../RoomHeader";
import { speak } from "../../store";

const Crew = () => {
  const langage = speak.use();
  return (
    <div className="room" id="crew">
      <RoomHeader
        image="/images/portrait.webp"
        roomName={
          langage === "french" ? "Quartiers de l'équipage" : "Crew quarters"
        }
        description="Sylvain ALEXANDRE"
      />
      {langage === "french" ? (
        <h1>Développeur web & logiciel</h1>
      ) : (
        <h1>Web & software developper</h1>
      )}

      <div className="buttonContainer">
        <Hashtag content={langage === "french" ? "créatif" : "creative"} />
        <Hashtag content={langage === "french" ? "autonome" : "autonomous"} />
        <Hashtag content={langage === "french" ? "passioné" : "passionate"} />
      </div>
      {langage === "french" ? (
        <p>
          Je vous propose une présentation originale à <em>"bord"</em> de mon
          Portfolio réalisé par mes soins. Vous y trouverez{" "}
          <b>mes qualifications</b> en tant que développeur,{" "}
          <b>mes réalisations</b> ainsi que certaines de <b>mes passions</b>.
          <br />
          Étant partisan du <em>"show, don't tell"</em>, les <b>technologies</b>{" "}
          que j'utilise sont précisées uniquement là où elles sont employées.
          <br />
          Je garde en tête qu'être développeur est avant tout être capable de
          solutionner des problèmes et que le code n'est que l'outils et non la
          finalité.
          <br />
          Bonne visite !
        </p>
      ) : (
        <p>
          I offer you an original presentation <em>"aboard"</em> my self-made
          Portfolio. You will find <b>my qualifications</b> as a developer,{" "}
          <b>my achievements</b>, as well as some of <b>my passions</b>. Being a
          supporter of <em>"show, don't tell"</em>, the <b>technologies</b> I
          use are only specified where they are employed.
          <br />
          I keep in mind that being a developer is, above all, about solving
          problems, with code as a tool, not the end goal.
          <br />
          Enjoy your visit!
        </p>
      )}
    </div>
  );
};

export default Crew;
