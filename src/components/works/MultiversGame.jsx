import { useState } from "react";
import Button from "../Button";
import { SiNextdotjs, SiTailwindcss, SiGooglecloud } from "react-icons/si";
import Modal from "../Modal";
import Techno from "../Techno";
import SEOSchema from "../SEOSchema";

const MultiversGame = ({ langage }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const multiversGame = {
    title: "Moult'Univers Game",
    description:
      langage === "french"
        ? "Escape game & Huis Clos à domicile"
        : "Home escape games",
    image: "./images/multiversGame.webp",
    github: "",
    web: "https://www.moultunivers-game.fr",
  };

  const multiversGameSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Moult'Univers Game",
    description: "Site web pour une entreprise d'escape game et huis clos à domicile, développé avec Next.js",
    url: multiversGame.web,
    author: {
      "@type": "Person",
      "@id": "https://sylvainalx.github.io/portfolio/#person"
    },
    inLanguage: "fr-FR"
  };

  return (
    <section className="work animated">
      <SEOSchema schema={multiversGameSchema} />
      <h4>{multiversGame.title}</h4>
      <p>{multiversGame.description}</p>

      <Modal
        work={multiversGame}
        zoomImage={zoomImage}
        setZoomImage={setZoomImage}
      />
      <div className="technos animated">
        <Techno rank={2}>
          <SiNextdotjs className="icon" />
          Next.js
        </Techno>
        <Techno rank={2}>
          <SiTailwindcss className="icon" />
          Tailwind CSS
        </Techno>
        <Techno rank={1}>
          <SiGooglecloud className="icon" />
          Google Cloud
        </Techno>
      </div>
      <div className="buttonContainer animated">
        {multiversGame.web && (
          <Button text="voir le site" id={multiversGame.web} />
        )}
      </div>
    </section>
  );
};

export default MultiversGame;
