import Techno from "../Techno";
import { useState } from "react";
import { SiAstro, SiTypescript, SiTailwindcss } from "react-icons/si";
import Button from "../Button";
import Modal from "../Modal";
import SEOSchema from "../SEOSchema";

const Website = ({ langage }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const website = {
    title: "ALX Solutions Numériques",
    description:
      langage === "french"
        ? "Développeur web et formateur indépendant"
        : "Independent web developer and trainer",
    image: "./images/website.webp",
    github: "",
    web: "https://alx-solutions-numeriques.fr/",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ALX Solutions Numériques",
    description: "Site web professionnel de Sylvain Alexandre, développeur web et formateur indépendant, développé avec Astro et TypeScript",
    url: website.web,
    author: {
      "@type": "Person",
      "@id": "https://sylvainalx.github.io/portfolio/#person"
    },
    inLanguage: "fr-FR"
  };

  return (
    <section className="work animated">
      <SEOSchema schema={websiteSchema} />
      <h4>{website.title}</h4>
      <p>{website.description}</p>
      <Modal work={website} zoomImage={zoomImage} setZoomImage={setZoomImage} />

      <div className="technos animated">
        <Techno rank={3}>
          <SiTypescript className="icon" />
          TypeScript
        </Techno>
        <Techno rank={3}>
          <SiAstro className="icon" />
          Astro
        </Techno>
        <Techno rank={2}>
          <SiTailwindcss className="icon" />
          Tailwind CSS
        </Techno>
      </div>
      <div className="buttonContainer animated">
        {website.web && <Button text="voir le site" id={website.web} />}
      </div>
    </section>
  );
};

export default Website;
