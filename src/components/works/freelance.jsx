import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiRust,
  SiSolidity,
  SiPwa,
} from "react-icons/si";

const Freelance = ({ langage }) => {
  return (
    <li className="alignedItems">
      {langage === "french" ? (
        <>
          <b>2025</b>
          <strong>Développeur freelance</strong>
          <p>
            Élaboration d&apos;applications web et pratique de nouveaux
            languages de programmation
          </p>
        </>
      ) : (
        <>
          <b>2025</b>
          <strong>Freelance developper</strong>
          <p>
            Development of web applications and practice of new programming
            languages
          </p>
        </>
      )}
      <div className="technos animated">
        <div className="techno">
          <SiPwa className="icon" />
          Progressive Web App
        </div>
        <div className="techno">
          <SiTailwindcss className="icon" />
          Tailwind CSS
        </div>
        <div className="techno">
          <SiTypescript className="icon" />
          TypeScript
        </div>
        <div className="techno">
          <SiReact className="icon" />
          React
        </div>
        <div className="techno">
          <SiRust className="icon" />
          Rust
        </div>
        <div className="techno">
          <SiSolidity className="icon" />
          Solidity
        </div>
      </div>
    </li>
  );
};

export default Freelance;
