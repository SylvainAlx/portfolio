import Hashtag from "../Hashtag";
import RoomHeader from "../RoomHeader";
import { speak } from "../../store";

const Crew = () => {
  const langage = speak.use();
  return (
    <div className="room" id="crew">
      <RoomHeader
        image="/images/profil.webp"
        roomName={
          langage === "french" ? "Quartiers de l'équipage" : "Crew quarters"
        }
        description="Sylvain ALEXANDRE"
      />
      {langage === "french" ? (
        <h1>Développeur web & formateur indépendant</h1>
      ) : (
        <h1>Independent web developer and trainer</h1>
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
          est venue compléter mes compétences en{" "}
          <strong>développement informatique</strong> avec des langages plus bas
          niveau (Delphi) et des <b>exigences</b> en matière de test et de
          stabilité.
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
          Aujourd&apos;hui, je suis{" "}
          <b>développeur web et formateur indépendant</b> : je crée des sites
          web sur mesure, réalise des audits techniques, accompagne des missions
          en freelance et forme des adultes au numérique.
          <br />
          Bonne visite !
        </p>
      ) : (
        <p>
          A hybrid-profile developer!
          <br />
          My training introduced me to the field through modern technologies
          (React, Node.js, MongoDB), and my first professional experience
          complemented my skills in <strong>software development</strong> with
          lower-level languages (Delphi) and strong <b>requirements</b> in
          testing and stability.
          <br />
          These two sides of my tech background allow me to approach problems
          with a <b>modern and rigorous perspective</b>, in order to deliver{" "}
          <b>efficient and maintainable solutions</b>.
          <br />I also gained skills in Next.js and Rust through my growing
          interest in <b>blockchain development</b> and Web3 in general.
          <br />
          Today, I work as an <b>independent web developer and trainer</b>: I
          build custom websites, carry out technical audits, take on freelance
          projects, and train adults in digital skills.
          <br />
          Enjoy your visit!
        </p>
      )}
    </div>
  );
};

export default Crew;
