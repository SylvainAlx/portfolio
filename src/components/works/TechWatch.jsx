import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPwa,
  SiAstro,
  SiRust,
} from "react-icons/si";

const TechWatch = ({ langage }) => {
  return (
    <li className="alignedItems">
      {langage === "french" ? (
        <>
          <b>en cours</b>
          <h5>Veille technologique</h5>
          <p>
            Élaboration d&apos;applications web et pratique de nouveaux
            languages de programmation
          </p>
        </>
      ) : (
        <>
          <b>under way</b>
          <h5>Technology watch</h5>
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
          <SiNextdotjs className="icon" />
          Next.js
        </div>
        <div className="techno">
          <SiAstro className="icon" />
          Astro
        </div>
        <div className="techno">
          <SiRust className="icon" />
          Rust
        </div>
      </div>
    </li>
  );
};

export default TechWatch;
