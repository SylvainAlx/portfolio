import Button from "../Button";
import { SiSass, SiReact, SiVite } from "react-icons/si";

const Portfolio = () => {
  const portfolio = {
    title: "Portfolio",
    description: "Vous êtes dessus !",
    image: "./images/portfolio.webp",
    github: "https://github.com/SylvainAlx/portfolio",
    web: "https://sylvainalx.github.io/portfolio/",
  };
  return (
    <section className="work animated">
      <h4>{portfolio.title}</h4>
      <p>{portfolio.description}</p>
      <img src={portfolio.image} alt={`image ${portfolio.title}`} />
      <div className="technos animated">
        <div className="techno">
          <SiReact className="icon" />
          React
        </div>
        <div className="techno">
          <SiSass className="icon" />
          SASS
        </div>
        <div className="techno">
          <SiVite className="icon" />
          Vite
        </div>
      </div>
      <div className="buttonContainer">
        <Button name="github" id={portfolio.github} />
        {portfolio.web && <Button id={portfolio.web} />}
      </div>
    </section>
  );
};

export default Portfolio;
