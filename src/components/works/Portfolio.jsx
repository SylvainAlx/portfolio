import Button from "../Button";
import { SiSass, SiReact, SiVite } from "react-icons/si";
import { useState } from "react";
import Modal from "../Modal";
import Techno from "../Techno";
import SEOSchema from "../SEOSchema";

const Portfolio = ({ langage }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const portfolio = {
    title: "Portfolio",
    description: langage === "french" ? "Vous êtes dessus !" : "You're on it !",
    image: "./images/portfolio.webp",
    github: "https://github.com/SylvainAlx/portfolio",
    web: "https://sylvainalx.github.io/portfolio/",
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Portfolio Sylvain Alexandre",
    description: "Portfolio professionnel interactif développé avec React, présentant les compétences et réalisations de Sylvain Alexandre",
    url: portfolio.web,
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    author: {
      "@type": "Person",
      "@id": "https://sylvainalx.github.io/portfolio/#person"
    },
    programmingLanguage: ["JavaScript", "React", "SASS"],
    codeRepository: portfolio.github,
    dateCreated: "2024",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR"
    }
  };

  return (
    <section className="work animated">
      <SEOSchema schema={portfolioSchema} />
      <h4>{portfolio.title}</h4>
      <p>{portfolio.description}</p>
      <Modal
        work={portfolio}
        zoomImage={zoomImage}
        setZoomImage={setZoomImage}
      />
      <div className="technos animated">
        <Techno rank={3}>
          <SiReact className="icon" />
          React
        </Techno>
        <Techno rank={2}>
          <SiSass className="icon" />
          SASS
        </Techno>
        <Techno rank={2}>
          <SiVite className="icon" />
          Vite
        </Techno>
      </div>
      <div className="buttonContainer animated">
        <Button text="code source" name="github" id={portfolio.github} />
        {portfolio.web && <Button text="voir le site" id={portfolio.web} />}
      </div>
    </section>
  );
};

export default Portfolio;
