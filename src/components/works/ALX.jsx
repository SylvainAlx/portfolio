import {
  SiTypescript,
  SiSupabase,
  SiNextdotjs,
  SiPwa,
  SiAstro,
  SiWordpress,
} from "react-icons/si";
import Techno from "../Techno";

const ALX = ({ langage }) => {
  return (
    <li className="alignedItems">
      {langage === "french" ? (
        <>
          <span>
            <b>depuis 2025</b>
            <a
              href="https://alx-solutions-numeriques.fr/"
              target="_blank"
              rel="noreferrer"
            >
              ALX Solutions Numériques
            </a>
          </span>
          <h5>Développeur web et formateur indépendant</h5>
          <p>
            Freelance spécialisé en sites vitrines et en formations à
            l&apos;autonomie numérique pour particuliers et professionnels.
          </p>
        </>
      ) : (
        <>
          <span>
            <b>since 2025</b>
            <a
              href="https://alx-solutions-numeriques.fr/"
              target="_blank"
              rel="noreferrer"
            >
              ALX Solutions Numériques
            </a>
          </span>
          <h5>Independent web developer and trainer</h5>
          <p>
            Freelance specialized in showcase websites and digital autonomy
            training for individuals and professionals.
          </p>
        </>
      )}
      <div className="technos animated">
        <Techno rank={3}>
          <SiTypescript className="icon" />
          TypeScript
        </Techno>

        <Techno rank={3}>
          <SiAstro className="icon" />
          Astro
        </Techno>
        <Techno rank={2}>
          <SiWordpress className="icon" />
          WordPress
        </Techno>
        <Techno rank={2}>
          <SiPwa className="icon" />
          Progressive Web App
        </Techno>
        <Techno rank={2}>
          <SiSupabase className="icon" />
          Supabase
        </Techno>
        <Techno rank={2}>
          <SiNextdotjs className="icon" />
          Next.js
        </Techno>
      </div>
    </li>
  );
};

export default ALX;
