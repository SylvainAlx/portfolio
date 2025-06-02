import { BiLinkExternal } from "react-icons/bi";
import { SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

const WWW_ACDEMY = ({ langage }) => {
  return (
    <li className="alignedItems">
      {langage === "french" ? (
        <>
          <b>2023</b>
          <h5>Formation</h5>
          <p>BAC+2 Développeur intégrateur en réalisation d’applications web</p>
        </>
      ) : (
        <>
          <b>2023</b>
          <h5>School</h5>
          <p>Bachelor&apos;s degree in full-stack web developpement</p>
        </>
      )}
      <div className="technos animated">
        <div className="techno">
          <SiReact className="icon" />
          React
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
      <a
        className="button"
        href="https://diplome.3wa.fr/alexandre-sylvain"
        target="_blank"
        rel="noreferrer"
      >
        <BiLinkExternal />
        {langage === "french" ? <span>diplôme</span> : <span>degree</span>}
      </a>
    </li>
  );
};

export default WWW_ACDEMY;
