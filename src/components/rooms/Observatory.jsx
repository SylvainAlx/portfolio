import Hobby from "../Hobby";
import RoomHeader from "../RoomHeader";
import {
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiProtools,
  SiAdobeaudition,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Hashtag from "../Hashtag";

const Observatory = () => {
  return (
    <div className="room animated" id="observatory">
      <RoomHeader
        image="/images/observatory.webp"
        roomName="Observatoire"
        description="Mes passions"
      />
      <div className="sectionContainer">
        <Hobby
          title="photographie"
          description="photographier, les gens, les paysages, de loin ou en macro"
          image="./images/planet1.webp"
          children={
            <>
              <section>
                <div className="buttonContainer">
                  <Hashtag content="édition d'images" />
                  <Hashtag content="notions d'astronomie" />
                </div>
                <ul>
                  <li>
                    <b>Astrophotographie :</b> Observer le plus loin possible
                    dans le ciel avec le défi de la faible lumière et la
                    rotation de la Terre
                  </li>
                  <li>
                    <b>Macrophoto :</b> La faune et la flore sauvages au plus
                    près pour voir les moindres détails
                  </li>
                </ul>
                <div className="technos">
                  <div className="techno">
                    <SiAdobephotoshop className="icon" />
                    Adobe Photoshop
                  </div>
                  <div className="techno">
                    <SiAdobelightroom className="icon" />
                    Adobe Lightroom
                  </div>
                  <div className="techno">
                    <SiAdobepremierepro className="icon" />
                    Adobe Premiere
                  </div>
                </div>
              </section>
            </>
          }
        />
        <Hobby
          title="Musique"
          image="./images/planet3.webp"
          children={
            <>
              <section>
                <div className="buttonContainer">
                  <Hashtag content="écouter & accompagner" />
                </div>
                <ul>
                  <li>
                    <b>Sonorisation :</b> utilisation de tables de mixage,
                    systèmes de captation & diffusion
                  </li>
                  <li>
                    <b>Home studio :</b> Mixage & montage du son, enregistrement
                    studio
                  </li>
                  <li>
                    <b>Instruments :</b> Guitare & piano
                  </li>
                </ul>
                <div className="technos">
                  <div className="techno">
                    <SiProtools className="icon" />
                    Avid ProTools
                  </div>
                  <div className="techno">
                    <SiAdobeaudition className="icon" />
                    Adobe Audition
                  </div>
                </div>
              </section>
            </>
          }
        />
        <Hobby
          title="Écriture"
          image="./images/planet2.webp"
          children={
            <>
              <section>
                <div className="buttonContainer">
                  <Hashtag content="imaginer une histoire" />
                  <Hashtag content="structurer un récit" />
                </div>
                <ul>
                  <li>
                    Grand amateur de littérature de science-fiction &
                    fantastique, je m'essaie à passer de l'autre côté
                  </li>
                </ul>
              </section>
            </>
          }
        />

        <Hobby
          title="Jardinage"
          image="./images/planet4.webp"
          children={
            <>
              <section>
                <div className="buttonContainer">
                  <Hashtag content="conscience écologique" />
                  <Hashtag content="patience & persévérance" />
                  <Hashtag content="travail physique" />
                </div>
                <ul>
                  <li>
                    <b>Potager :</b> Semer, planter, voir croître, récolter,
                    composter
                  </li>
                  <li>
                    <b>Poulailler :</b> Soigner, entretenir, limiter les déchets
                    alimentaires
                  </li>
                  <li>
                    <b>Bricolage :</b> Réparer, contruire, améliorer, recycler
                  </li>
                </ul>
              </section>
            </>
          }
        />
        <Hobby
          title="Jeux vidéos"
          image="./images/planet5.webp"
          children={
            <>
              <section>
                <div className="buttonContainer">
                  <Hashtag content="coopération & partage" />
                </div>
                <ul>
                  <li>
                    <b>Minecraft :</b> Bâtir, explorer, améliorer et
                    expérimenter, gestion d'une micronation virtuelle
                  </li>
                </ul>
                <div className="techno">
                  <FaJava className="icon" />
                  Java (plugins)
                </div>
              </section>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Observatory;
