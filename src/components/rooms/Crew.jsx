import RoomHeader from "../RoomHeader";

const Crew = () => {
  return (
    <div className="room commandant">
      <RoomHeader
        image="/images/portrait.jpg"
        roomName="Quartiers de l'équipage"
        description="Sylvain ALEXANDRE"
      />
      <h1>Développeur web, mais pas uniquement !</h1>
      <p>
        Bienvenue à bord du <em>Portfolio</em>. Je vous propose un petit tour
        d'horizon original de mon parcours de vie, mes recherches et mes
        passions. Bonne visite !
      </p>
    </div>
  );
};

export default Crew;
