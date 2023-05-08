import Hashtag from "../Hashtag";
import RoomHeader from "../RoomHeader";

const Crew = () => {
  return (
    <div className="room crew">
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
        Vous y trouverez <em>mes qualifications</em> en tant que développeur,{" "}
        <em>mes réalisations</em> ainsi que certaines de <em>mes passions</em>.
        Bonne visite !
      </p>
    </div>
  );
};

export default Crew;