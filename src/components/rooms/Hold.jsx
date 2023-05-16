import RoomHeader from "../RoomHeader";
import Work from "../Work";

const Hold = () => {
  const portfolio = {
    title: "Portfolio",
    description: "Vous êtes dessus !",
    image: "./images/Portfolio.webp",
    technos: ["React", "SASS", "Vite"],
    github: "https://github.com/SylvainAlx/portfolio",
    web: "https://sylvainalx.github.io/portfolio/",
  };
  const background = {
    title: "Background",
    description:
      "PROJET DE FIN D'ETUDES - outil d'aide à la création d'univers fictionnels (“worldbuilding”)",
    image: "/",
    technos: ["React", "Node.JS", "MongoDB"],
    github: "https://github.com/SylvainAlx/background",
    web: "",
  };

  return (
    <div className="room hold animated">
      <RoomHeader
        image="/images/hold.webp"
        roomName="Soute"
        description="Mes réalisations"
      />
      <div className="workContainer">
        <Work data={portfolio} />
        <Work data={background} />
      </div>
    </div>
  );
};

export default Hold;
