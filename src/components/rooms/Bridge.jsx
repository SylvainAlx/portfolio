import RoomHeader from "../RoomHeader";
import "../../assets/scss/Room.scss";
import { AiFillFileText } from "react-icons/ai";
import { speak } from "../../store";
import Atelog2i from "../works/Atelog2i";
import WWW_ACDEMY from "../works/3WA";
import Freelance from "../works/freelance";

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
            <Freelance langage={langage} />
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
          {langage === "french" ? (
            <ul className="list">
              <li className="alignedItems">
                <b>2017-2022</b>
                <div>Assistant d'éducation</div>
              </li>
              <li className="alignedItems">
                <b>2017-2019</b>
                <div>Photographe freelance</div>
              </li>
              <li className="alignedItems">
                <b>2011-2016</b>
                <div>Technicien Canal+</div>
              </li>
              <li className="alignedItems">
                <b>2010</b>
                <div>BAC+2 Audiovisuel</div>
              </li>
            </ul>
          ) : (
            <ul className="list">
              <li className="alignedItems">
                <b>2017-2022</b>
                <div>Teacher's aide</div>
              </li>
              <li className="alignedItems">
                <b>2017-2019</b>
                <div>Freelance photographer</div>
              </li>
              <li className="alignedItems">
                <b>2011-2016</b>
                <div>TV technical expert (Canal+)</div>
              </li>
              <li className="alignedItems">
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
