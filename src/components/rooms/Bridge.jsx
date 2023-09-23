import RoomHeader from "../RoomHeader";
import "../../assets/scss/Room.scss";
import { AiFillFileText } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { speak } from "../../store";
import {
  SiAngular,
  SiNestjs,
  SiDelphi,
  SiMicrosoftsqlserver,
} from "react-icons/si";

const Bridge = () => {
  const width = window.innerWidth;
  const langage = speak.use();
  const handleClick = (e) => {
    window.open(
      `./documents/CV_Sylvain_ALEXANDRE_developpeur_web_2023.07.11.pdf`,
      "_blank"
    );
  };
  return (
    <div className={`room ${width < 500 ? "animated" : ""}`} id="bridge">
      <RoomHeader
        image="/images/bridge.webp"
        roomName={langage == "french" ? "Salle de contrôle" : "Control room"}
        description={langage == "french" ? "Parcours" : "Background"}
      />
      <div className="sectionContainer">
        <section className={width < 500 ? "animated" : ""}>
          {langage === "french" ? (
            <>
              <h4>Actuellement</h4>
              <h3>
                Développeur logiciel web -{" "}
                <a href="https://smart-industry-myscore.fr/" target="_blank">
                  Atelog MyScore
                </a>
              </h3>
            </>
          ) : (
            <>
              <h4>Now</h4>
              <h3>
                Software developer -{" "}
                <a href="https://smart-industry-myscore.fr/" target="_blank">
                  Atelog MyScore
                </a>
              </h3>
            </>
          )}
          <div className="technos animated">
            <div className="techno">
              <SiAngular className="icon" />
              Angular
            </div>
            <div className="techno">
              <SiNestjs className="icon" />
              Nest.js
            </div>
            <div className="techno">
              <SiDelphi className="icon" />
              Delphi
            </div>
            <div className="techno">
              <SiMicrosoftsqlserver className="icon" />
              SQL Server
            </div>
          </div>
        </section>
        <section className={width < 500 ? "animated" : ""}>
          {langage === "french" ? (
            <h4>D'où je viens</h4>
          ) : (
            <h4>Where I come from</h4>
          )}
          {langage === "french" ? (
            <ul className="list">
              <li>
                <b>2023</b>- BAC+2 Développeur intégrateur en réalisation
                d’applications web{" "}
                <a
                  className="button"
                  href="https://diplome.3wa.fr/alexandre-sylvain"
                  target="_blank"
                >
                  voir
                  <BiLinkExternal />
                </a>
              </li>
              <li>
                <b>2017-2022</b>- Assistant d'éducation
              </li>
              <li>
                <b>2017-2019</b>- Photographe freelance
              </li>
              <li>
                <b>2011-2016</b>- Technicien Canal+
              </li>
              <li>
                <b>2010</b>- BAC+2 Audiovisuel
              </li>
            </ul>
          ) : (
            <ul className="list">
              <li>
                <b>2023</b>- Bachelor's degree in full-stack web developpement{" "}
                <a
                  className="button"
                  href="https://diplome.3wa.fr/alexandre-sylvain"
                  target="_blank"
                >
                  voir
                  <BiLinkExternal />
                </a>
              </li>
              <li>
                <b>2017-2022</b>- Teacher's aide
              </li>
              <li>
                <b>2017-2019</b>- Freelance photographer
              </li>
              <li>
                <b>2011-2016</b>- TV technical expert (Canal+)
              </li>
              <li>
                <b>2010</b>- Bachelor's degree in audio-visual
              </li>
            </ul>
          )}
        </section>
      </div>
      {/* <div
        className={`button ${width < 500 ? "animated" : ""}`}
        onClick={handleClick}
      >
        <AiFillFileText />
        {langage === "french" ? "télécharger mon CV" : "download resume"}
      </div> */}
    </div>
  );
};

export default Bridge;
