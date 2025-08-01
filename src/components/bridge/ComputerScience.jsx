import Atelog2i from "../works/Atelog2i";
import WWW_ACDEMY from "../works/3WA";
import TechWatch from "../works/TechWatch";

const ComputerScience = ({ langage }) => {
  const width = window.innerWidth;
  return (
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
        <TechWatch langage={langage} />
        <Atelog2i langage={langage} />
        <WWW_ACDEMY langage={langage} />
      </ul>
    </section>
  );
};

export default ComputerScience;
