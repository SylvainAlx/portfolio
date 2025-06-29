import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPwa,
  SiAstro,
  SiRust,
} from "react-icons/si";
import Techno from "../Techno";

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
        <Techno rank={2}>
          <SiPwa className="icon" />
          Progressive Web App
        </Techno>
        <Techno rank={2}>
          <SiTailwindcss className="icon" />
          Tailwind CSS
        </Techno>
        <Techno rank={3}>
          <SiTypescript className="icon" />
          TypeScript
        </Techno>
        <Techno rank={2}>
          <SiNextdotjs className="icon" />
          Next.js
        </Techno>
        <Techno rank={3}>
          <SiAstro className="icon" />
          Astro
        </Techno>
        <Techno rank={1}>
          <SiRust className="icon" />
          Rust
        </Techno>
      </div>
    </li>
  );
};

export default TechWatch;
