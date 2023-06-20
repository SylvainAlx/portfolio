import Hashtag from "../Hashtag";
import RoomHeader from "../RoomHeader";

const Crew = () => {
  return (
    <div className="room" id="crew">
      <RoomHeader
        image="/images/portrait.webp"
        roomName="Quartiers de l'équipage"
        description="Sylvain ALEXANDRE"
      />
      <h1>Développeur web, mais pas uniquement !</h1>
      <div className="buttonContainer">
        <Hashtag content={"créatif"} />
        <Hashtag content={"autonome"} />
        <Hashtag content={"passionné"} />
      </div>
      <p>
        Je vous propose un petit tour d'horizon original de mon parcours de vie.
        Vous y trouverez <b>mes qualifications</b> en tant que développeur,{" "}
        <b>mes réalisations</b> ainsi que certaines de <b>mes passions</b>.
        Étant partisan du "show, don't tell", les <b>technologies</b> que
        j'utilise sont précisées sur mes projets réalisés. Bonne visite !
      </p>
    </div>
  );
};

export default Crew;
