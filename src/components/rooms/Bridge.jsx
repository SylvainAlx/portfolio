import RoomHeader from "../RoomHeader";
import "../../assets/scss/Room.scss";
import { speak } from "../../store";
import Atelog2i from "../works/Atelog2i";
import WWW_ACDEMY from "../works/3WA";
import TechWatch from "../works/TechWatch";
import {
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiProtools,
  SiAdobeaudition,
} from "react-icons/si";
import Techno from "../Techno";

const Bridge = () => {
  const width = window.innerWidth;
  const langage = speak.use();

  return (
    <div className={`room ${width < 500 ? "animated" : ""}`} id="bridge">
      <RoomHeader
        image="/images/bridge.webp"
        roomName={langage == "french" ? "Salle de contrôle" : "Control room"}
        description={langage == "french" ? "Parcours" : "Background"}
      />
      <div className="sectionContainer">
        <section
          className={`${
            width < 500 ? "animated" : ""
          } flex flex-col items-center`}
        >
          {langage === "french" ? (
            <h4>Informatique</h4>
          ) : (
            <h4>Computer science</h4>
          )}
          <ul className="list">
            <TechWatch langage={langage} />
            <Atelog2i langage={langage} />
            <WWW_ACDEMY langage={langage} />
          </ul>
        </section>
        <section className={width < 500 ? "animated" : ""}>
          {langage === "french" ? (
            <h4>Avant ma reconversion</h4>
          ) : (
            <h4>Before my career change</h4>
          )}

          <ul className="list">
            <li className="alignedItems">
              <b>2017-2022</b>
              {langage === "french" ? (
                <div>Assistant d&apos;éducation</div>
              ) : (
                <div>Teacher&apos;s aide</div>
              )}
            </li>
            <li className="alignedItems">
              <b>2017-2019</b>
              {langage === "french" ? (
                <div>Photographe freelance</div>
              ) : (
                <div>Freelance photographer</div>
              )}
              <div className="technos">
                <Techno rank={2}>
                  <SiAdobephotoshop className="icon" />
                  Adobe Photoshop
                </Techno>
                <Techno rank={3}>
                  <SiAdobelightroom className="icon" />
                  Adobe Lightroom
                </Techno>
                <Techno rank={2}>
                  <SiAdobepremierepro className="icon" />
                  Adobe Premiere
                </Techno>
              </div>
            </li>
            <li className="alignedItems">
              <b>2011-2016</b>
              {langage === "french" ? (
                <div>Technicien Canal+</div>
              ) : (
                <div>TV technical expert (Canal+)</div>
              )}
            </li>
            <li className="alignedItems">
              <b>2010</b>
              {langage === "french" ? (
                <div>BAC+2 Audiovisuel</div>
              ) : (
                <div>Bachelor&apos;s degree in audio-visual</div>
              )}
              <div className="technos">
                <Techno rank={3}>
                  <SiProtools className="icon" />
                  Avid ProTools
                </Techno>
                <Techno rank={2}>
                  <SiAdobeaudition className="icon" />
                  Adobe Audition
                </Techno>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Bridge;
