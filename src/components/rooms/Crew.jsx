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
          Développeur au profil hybride !
          <br />
          Ma formation m&apos;a fait rentrer dans le métier via des technologies
          plutôt récentes (React, Node.js, MongoDB), et ma première expérience
          est venue compléter mes <b>compétences en ingénierie logiciel</b> avec
          des langages bas niveau (Delphi) et des <b>exigences</b> en matière de
          test et de stabilité.
          <br />
          Ces deux facettes de ma casquette tech me permettent
          d&apos;appréhender un problème avec un{" "}
          <b>regard moderne et rigoureux</b> afin de proposer une{" "}
          <b>solution efficace et maintenable</b>.
          <br />
          J&apos;ai également acquis des compétences en Next.js et Rust suite à
          mon intérêt grandissant pour le <b>développement blockchain</b> et le
          Web3 au sens large.
          <br />
          Bonne visite !
        </p>
      ) : (
        <p>
          Developer with a hybrid profile!
          <br />
          My education introduced me to the field through relatively recent
          technologies (React, Node.js, MongoDB), and my first experience
          further strengthened my <b>software engineering skills</b> with
          low-level languages (Delphi) and <b>requirements</b> in terms of
          testing and stability.
          <br />
          These two facets of my tech background allow me to approach a problem
          with a <b>modern and rigorous perspective</b> in order to provide an{" "}
          <b>efficient and maintainable solution</b>.
          <br />I have also acquired skills in Next.js and Rust due to my
          growing interest in <b>blockchain development</b> and Web3 in a
          broader sense.
          <br />
          Enjoy your visit!
        </p>
      )}
    </div>
  );
};

export default Crew;
