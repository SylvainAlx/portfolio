import Button from "../Button";
import { SiSass, SiReact, SiVite } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Portfolio = () => {
  const [zoomImage, setZoomImage] = useState(false);
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
      <img
        onClick={() => setZoomImage(!zoomImage)}
        src={portfolio.image}
        alt={`image ${portfolio.title}`}
      />
      {zoomImage && (
        <div className="zoomed">
          <img src={portfolio.image} alt={`image ${portfolio.title}`} />
          <div onClick={() => setZoomImage(!zoomImage)} className="close">
            <AiFillCloseCircle />
          </div>
        </div>
      )}
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
        <Button text="code source" name="github" id={portfolio.github} />
        {portfolio.web && <Button text="voir" id={portfolio.web} />}
      </div>
    </section>
  );
};

export default Portfolio;
