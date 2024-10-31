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
  SiGitlab,
} from "react-icons/si";

const Bridge = () => {
  const width = window.innerWidth;
  const langage = speak.use();
  const handleClick = () => {
    window.open(
      `./documents/CV_Sylvain_ALEXANDRE_developpeur_web_2024.10.31.pdf`,
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
            {langage === "french" ? (
              <li>
                <span>
                  <b>2023-2024</b>
                  <a href="https://smart-industry-myscore.fr/" target="_blank">
                    Atelog MyScore
                  </a>
                </span>
                <div>Développeur logiciel</div>
                <p>
                  Création d’un logiciel pour récupérer et traiter des données
                  IOT et OPC
                </p>
                <p>
                  Maintenance d’un logiciel WMS & collaboration sur une
                  application web de MES
                </p>
                <p>Requête en base de données</p>
                <p>
                  Écriture de tests unitaires, de documentations et de cahier
                  des charges
                </p>
              </li>
            ) : (
              <li>
                <span>
                  <b>2023-2024</b>
                  <a href="https://smart-industry-myscore.fr/" target="_blank">
                    Atelog MyScore
                  </a>
                </span>
                <div>Software engineer</div>
                <p>
                  Development of a software to retrieve and process IOT and OPC
                  data
                </p>
                <p>
                  Maintenance of a WMS software & collaboration on a MES web
                  application
                </p>
                <p>Database querying</p>
                <p>Writing unit tests, documentation, and specifications</p>
              </li>
            )}
            <div className="technos animated">
              <div className="techno">
                <SiDelphi className="icon" />
                Delphi
              </div>
              <div className="techno">
                <SiMicrosoftsqlserver className="icon" />
                SQL Server
              </div>
              <div className="techno">
                <SiGitlab className="icon" />
                GitLab
              </div>
              <div className="techno">
                <SiAngular className="icon" />
                Angular
              </div>
              <div className="techno">
                <SiNestjs className="icon" />
                Nest.js
              </div>
            </div>
          </ul>
          <ul className="list">
            <li>
              {langage === "french" ? (
                <>
                  <b>2023</b>
                  <p>
                    BAC+2 Développeur intégrateur en réalisation d’applications
                    web
                  </p>
                </>
              ) : (
                <>
                  <b>2023</b>
                  <p>Bachelor's degree in full-stack web developpement</p>
                </>
              )}
              <div>
                <a
                  className="button"
                  href="https://diplome.3wa.fr/alexandre-sylvain"
                  target="_blank"
                >
                  <BiLinkExternal />
                </a>
              </div>
            </li>
          </ul>
        </section>
        <section className={width < 500 ? "animated" : ""}>
          {langage === "french" ? (
            <h4>Avant ma reconversion</h4>
          ) : (
            <h4>Before my career change</h4>
          )}
          {langage === "french" ? (
            <ul className="list">
              <li>
                <b>2017-2022</b>
                <div>Assistant d'éducation</div>
              </li>
              <li>
                <b>2017-2019</b>
                <div>Photographe freelance</div>
              </li>
              <li>
                <b>2011-2016</b>
                <div>Technicien Canal+</div>
              </li>
              <li>
                <b>2010</b>
                <div>BAC+2 Audiovisuel</div>
              </li>
            </ul>
          ) : (
            <ul className="list">
              <li>
                <b>2017-2022</b>
                <div>Teacher's aide</div>
              </li>
              <li>
                <b>2017-2019</b>
                <div>Freelance photographer</div>
              </li>
              <li>
                <b>2011-2016</b>
                <div>TV technical expert (Canal+)</div>
              </li>
              <li>
                <b>2010</b>
                <div>Bachelor's degree in audio-visual</div>
              </li>
            </ul>
          )}
        </section>
      </div>
      <div
        className={`button ${width < 500 ? "animated" : ""}`}
        onClick={handleClick}
      >
        <AiFillFileText />
        {langage === "french" ? "télécharger mon CV" : "download resume"}
      </div>
    </div>
  );
};

export default Bridge;
