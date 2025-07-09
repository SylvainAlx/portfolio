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
                <>
                  <h5>Assistant d&apos;éducation</h5>
                  <p>
                    Accompagnement et surveillance de lycéens en journée et à
                    l&apos;internat, gestion de vie scolaire et mise en place
                    d&apos;ateliers.
                  </p>
                </>
              ) : (
                <>
                  <h5>Teacher&apos;s aide</h5>
                  <p>
                    Supervision and support of high school students during the
                    day and at the boarding school, school life management, and
                    organization of workshops.
                  </p>
                </>
              )}
            </li>
            <li className="alignedItems">
              <b>2017-2019</b>
              {langage === "french" ? (
                <>
                  <h5>Photographe freelance</h5>
                  <p>
                    Prodution de photographies lors de mariages ou autres
                    évenements, retouches et édition d&apos;images.
                  </p>
                </>
              ) : (
                <>
                  <h5>Freelance photographer</h5>
                  <p>
                    Production of photographs during weddings or other events,
                    image retouching and editing.
                  </p>
                </>
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
                <>
                  <h5>Technicien Canal+</h5>
                  <p>
                    Compréhension des pannes et dépannage du matériel client au
                    niveau 2 (expert technique).
                  </p>
                </>
              ) : (
                <>
                  <h5>TV technical expert (Canal+)</h5>
                  <p>
                    Understanding of faults and troubleshooting of customer
                    equipment at level 2 (technical expert).
                  </p>
                </>
              )}
            </li>
            <li className="alignedItems">
              <b>2010</b>
              {langage === "french" ? (
                <>
                  <h5>BAC+2 Audiovisuel</h5>
                  <p>
                    Apprentissage de la sonorisation, de la captation et de
                    l&apos;édition audio dans tout type de contexte (concert,
                    télévision, cinéma).
                  </p>
                </>
              ) : (
                <>
                  <h5>Bachelor&apos;s degree in audio-visual</h5>
                  <p>
                    Learning about sound engineering, audio capture, and editing
                    in various contexts (concerts, television, cinema).
                  </p>
                </>
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
