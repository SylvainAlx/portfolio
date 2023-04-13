import RoomHeader from "../RoomHeader";

const Commandant = () => {
  return (
    <div className="room commandant">
      <RoomHeader
        image="src/assets/images/portrait.jpg"
        roomName="Quartiers du commandant"
        description="Sylvain ALEXANDRE"
      />
      <h1>Développeur web mais pas uniquement !</h1>
      <p>
        Je vous propose un petit tour d'horizon de mon parcours de vie, à
        l'image d'une visite d'un grand vaisseau qui trace son chemin
        paisiblement dans l'espace. Alors bienvenue à bord du <em>Portfolio</em>{" "}
        !
      </p>
    </div>
  );
};

export default Commandant;
