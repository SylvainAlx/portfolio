import { BiLinkExternal } from "react-icons/bi";

const WWW_ACDEMY = ({ langage }) => {
  return (
    <li className="alignedItems">
      {langage === "french" ? (
        <>
          <b>2023</b>
          <p>BAC+2 Développeur intégrateur en réalisation d’applications web</p>
        </>
      ) : (
        <>
          <b>2023</b>
          <p>Bachelor's degree in full-stack web developpement</p>
        </>
      )}
      <a
        className="button"
        href="https://diplome.3wa.fr/alexandre-sylvain"
        target="_blank"
      >
        <BiLinkExternal />
      </a>
    </li>
  );
};

export default WWW_ACDEMY;
