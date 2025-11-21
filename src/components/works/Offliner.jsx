import Techno from "../Techno";
import { useState } from "react";
import UnderConstruction from "../UnderConstruction";
import { SiExpo, SiTypescript, SiSupabase, SiAstro } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import Button from "../Button";
import Modal from "../Modal";
import SEOSchema from "../SEOSchema";

const Offliner = ({ langage }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const offlineTracker = {
    title: "Offliner",
    description:
      langage === "french"
        ? "L'application mobile qui compte et encourage le temps passé hors ligne"
        : "The mobile app that counts and encourages time spent offline",
    image: "./images/offliner.webp",
    github: "",
    web: "",
  };

  const offlinerSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Offliner",
    description: "Application mobile qui compte et encourage le temps passé hors ligne, développée avec React Native et Expo",
    applicationCategory: "LifestyleApplication",
    operatingSystem: ["iOS", "Android"],
    author: {
      "@type": "Person",
      "@id": "https://sylvainalx.github.io/portfolio/#person"
    },
    programmingLanguage: ["TypeScript", "React Native"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR"
    }
  };

  return (
    <section className="work animated">
      <SEOSchema schema={offlinerSchema} />
      <h4>{offlineTracker.title}</h4>
      <p>{offlineTracker.description}</p>
      <Modal
        work={offlineTracker}
        zoomImage={zoomImage}
        setZoomImage={setZoomImage}
      />

      <div className="technos animated">
        <Techno rank={1}>
          <SiExpo className="icon" />
          Expo
        </Techno>
        <Techno rank={1}>
          <FaReact className="icon" />
          React Native
        </Techno>
        <Techno rank={3}>
          <SiTypescript className="icon" />
          TypeScript
        </Techno>
        <Techno rank={1}>
          <SiSupabase className="icon" />
          Supabase
        </Techno>
        <Techno rank={3}>
          <SiAstro className="icon" />
          Astro
        </Techno>
      </div>
      <UnderConstruction langage={langage} />
      <div className="buttonContainer animated">
        {offlineTracker.web && (
          <Button text="voir le site" id={offlineTracker.web} />
        )}
      </div>
    </section>
  );
};

export default Offliner;
