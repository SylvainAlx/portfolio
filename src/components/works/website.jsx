import Techno from "../Techno";
import { useState } from "react";
import UnderConstruction from "../UnderConstruction";
import { SiAstro, SiTypescript } from "react-icons/si";
import Button from "../Button";
import Modal from "../Modal";

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
    web: "",
  };
  return (
    <section className="work animated">
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
      </div>
      <UnderConstruction langage={langage} />
      <div className="buttonContainer animated">
        {website.web && <Button text="voir le site" id={website.web} />}
      </div>
    </section>
  );
};

export default Website;
