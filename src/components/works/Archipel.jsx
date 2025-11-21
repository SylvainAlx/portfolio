import { useState } from "react";
import {
  SiPwa,
  SiTailwindcss,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiI18Next,
  SiVite,
} from "react-icons/si";
import Modal from "../Modal";
import Button from "../Button";
import Techno from "../Techno";
import SEOSchema from "../SEOSchema";

const Archipel = ({ langage }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const archipel = {
    title: "Archipel",
    description:
      langage === "french"
        ? "Citoyens des micronations & nations virtuelles"
        : "Citizens of micronations & virtual nations",
    image: "./images/archipel.webp",
    github: "https://github.com/SylvainAlx/archipel",
    web: "https://archipel-app.com/",
  };

  const archipelSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Archipel",
    description: "Progressive Web App pour les citoyens des micronations et nations virtuelles, développée avec React, TypeScript et MongoDB",
    url: archipel.web,
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    author: {
      "@type": "Person",
      "@id": "https://sylvainalx.github.io/portfolio/#person"
    },
    programmingLanguage: ["JavaScript", "TypeScript", "React", "Node.js"],
    codeRepository: archipel.github,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR"
    }
  };

  return (
    <section className="work animated">
      <SEOSchema schema={archipelSchema} />
      <h4>{archipel.title}</h4>
      <p>{archipel.description}</p>

      <Modal
        work={archipel}
        zoomImage={zoomImage}
        setZoomImage={setZoomImage}
      />
      <div className="technos animated">
        <Techno rank={2}>
          <SiPwa className="icon" />
          Progressive Web App
        </Techno>
        <Techno rank={3}>
          <SiReact className="icon" />
          React
        </Techno>
        <Techno rank={2}>
          <SiVite className="icon" />
          Vite
        </Techno>
        <Techno rank={2}>
          <SiTailwindcss className="icon" />
          Tailwind CSS
        </Techno>
        <Techno rank={3}>
          <SiTypescript className="icon" />
          TypeScript
        </Techno>
        <Techno rank={3}>
          <SiI18Next className="icon" />
          I18Next
        </Techno>
        <Techno rank={3}>
          <SiNodedotjs className="icon" />
          Node.js
        </Techno>
        <Techno rank={2}>
          <SiMongodb className="icon" />
          MongoDB
        </Techno>
      </div>
      <div className="buttonContainer animated">
        <Button text="code source" name="github" id={archipel.github} />
        {archipel.web && <Button text="voir le site" id={archipel.web} />}
      </div>
    </section>
  );
};

export default Archipel;
