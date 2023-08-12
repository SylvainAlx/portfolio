import Button from "../Button";
import {
  SiSass,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiRedux,
} from "react-icons/si";
import { useEffect, useState } from "react";
import PortalExample from "../PortalExample";

const Background = ({ langage }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const background = {
    title: "Background",
    description() {
      if (langage === "french") {
        return "Outil d'aide à la création d'univers fictionnels (“worldbuilding”)";
      } else {
        return "Help tool for the creation of fictional universes (“worldbuilding”)";
      }
    },
    image: "./images/background.webp",
    github: "https://github.com/SylvainAlx/background",
    web: "",
  };

  return (
    <section className="work animated">
      <h4>{background.title}</h4>
      <p>{background.description()}</p>
      <PortalExample
        work={background}
        zoomImage={zoomImage}
        setZoomImage={setZoomImage}
      />
      <div className="technos animated">
        <div className="techno">
          <SiReact className="icon" />
          React
        </div>
        <div className="techno">
          <SiRedux className="icon" />
          Redux
        </div>
        <div className="techno">
          <SiSass className="icon" />
          SASS
        </div>
        <div className="techno">
          <SiNodedotjs className="icon" />
          Node.js
        </div>
        <div className="techno">
          <SiMongodb className="icon" />
          MongoDB
        </div>
      </div>
      <div className="buttonContainer animated">
        <Button text="code source" name="github" id={background.github} />
        {background.web && <Button text="voir" id={background.web} />}
      </div>
    </section>
  );
};

export default Background;
