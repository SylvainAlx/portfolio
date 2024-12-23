import Button from "../Button";
import { SiSass, SiReact, SiVite } from "react-icons/si";
import { useState } from "react";
import PortalExample from "../PortalExample";

const Portfolio = ({ langage }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const portfolio = {
    title: "Portfolio",
    description: langage === "french" ? "Vous êtes dessus !" : "You're on it !",
    image: "./images/portfolio.webp",
    github: "https://github.com/SylvainAlx/portfolio",
    web: "https://sylvainalx.github.io/portfolio/",
  };
  return (
    <section className="work animated">
      <h4>{portfolio.title}</h4>
      <p>{portfolio.description}</p>
      <PortalExample
        work={portfolio}
        zoomImage={zoomImage}
        setZoomImage={setZoomImage}
      />
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
      <div className="buttonContainer animated">
        <Button text="code source" name="github" id={portfolio.github} />
        {portfolio.web && <Button text="voir le site" id={portfolio.web} />}
      </div>
    </section>
  );
};

export default Portfolio;
