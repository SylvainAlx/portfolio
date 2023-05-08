import RoomHeader from "../RoomHeader";
import Work from "../Work";

const Hold = () => {
  const portfolio = {
    title: "Portfolio",
    image: "./images/Portfolio.webp",
    technos: ["React", "SASS", "Vite"],
    github: "https://github.com/SylvainAlx/portfolio",
    web: "https://sylvainalx.github.io/portfolio/",
  };

  return (
    <div className="room hold animated">
      <RoomHeader
        image="/images/hold.webp"
        roomName="Soute"
        description="Mes réalisations"
      />
      <Work data={portfolio} />
    </div>
  );
};

export default Hold;
