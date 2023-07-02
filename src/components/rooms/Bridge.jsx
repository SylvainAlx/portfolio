import RoomHeader from "../RoomHeader";
import "../../assets/scss/Room.scss";
import { AiFillFileText } from "react-icons/ai";

const Bridge = () => {
  const handleClick = (e) => {
    window.open(
      `./documents/CV_Sylvain_ALEXANDRE_developpeur_web_2023.07.02.pdf`,
      "_blank"
    );
  };
  return (
    <div className="room animated" id="bridge">
      <RoomHeader
        image="/images/bridge.webp"
        roomName="Salle de contrôle"
        description="Qualifications"
      />
      <div className="sectionContainer">
        <section className="animated">
          <h4>d'où je viens</h4>
          <ul className="list">
            <li>
              <b>2023</b>- BAC+2 Developpeur web full-stack
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
        </section>
        <section className="animated">
          <h4>disponible pour les postes suivants</h4>
          <ol className="list">
            <li>
              <b>{"< "}</b>developpeur Front-End<b>{" />"}</b>
            </li>
            <li>
              <b>{"< "}</b>intégrateur web<b>{" />"}</b>
            </li>
            <li>
              <b>{"< "}</b>développeur web fullstack<b>{" />"}</b>
            </li>
          </ol>
        </section>
      </div>
      <div className="button animated" onClick={handleClick}>
        <AiFillFileText />
        télécharger mon CV
      </div>
    </div>
  );
};

export default Bridge;
