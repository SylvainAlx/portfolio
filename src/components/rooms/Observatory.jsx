import Hobby from "../Hobby";
import RoomHeader from "../RoomHeader";
import { FaJava } from "react-icons/fa";
import { SiGodotengine, SiUnity } from "react-icons/si";
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
        >
          <>
            <section>
              <div className="buttonContainer">
                <Hashtag content="édition d'images" />
                <Hashtag content="notions d'astronomie" />
              </div>
              <ul>
                <li>
                  <b>Astrophotographie :</b> Observer le plus loin possible dans
                  le ciel avec le défi de la faible lumière et la rotation de la
                  Terre
                </li>
                <li>
                  <b>Macrophoto :</b> La faune et la flore sauvages au plus près
                  pour voir les moindres détails
                </li>
              </ul>
            </section>
          </>
        </Hobby>
        <Hobby title="Musique" image="./images/planet3.webp">
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
            </section>
          </>
        </Hobby>
        <Hobby title="Écriture" image="./images/planet2.webp">
          <>
            <section>
              <div className="buttonContainer">
                <Hashtag content="imaginer une histoire" />
                <Hashtag content="structurer un récit" />
              </div>
              <ul>
                <li>
                  Grand amateur de littérature de science-fiction & fantastique,
                  je m&apos;essaie à passer de l&apos;autre côté
                </li>
              </ul>
            </section>
          </>
        </Hobby>

        <Hobby title="Jardinage" image="./images/planet4.webp">
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
        </Hobby>
        <Hobby title="Jeux vidéos" image="./images/planet5.webp">
          <>
            <section>
              <div className="buttonContainer">
                <Hashtag content="coopération & partage" />
              </div>
              <ul>
                <li>
                  <b>Minecraft :</b> Bâtir, explorer, et améliorer, gestion
                  d&apos;une micronation virtuelle
                </li>
                <li>
                  <b>Kerbal Space Program :</b> Voyager, comprendre,
                  expérimenter
                </li>
              </ul>
              <div className="technos">
                <div className="techno">
                  <FaJava className="icon" />
                  Java (plugins)
                </div>
                <div className="techno">
                  <SiGodotengine className="icon" />
                  Godot
                </div>
                <div className="techno">
                  <SiUnity className="icon" />
                  Unitiy
                </div>
              </div>
            </section>
          </>
        </Hobby>
      </div>
    </div>
  );
};

export default Observatory;
