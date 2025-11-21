import Navbar from "./Navbar";
import Speak from "./Speak";
import { speak } from "../store";

const Header = () => {
  const langage = speak.use();
  return (
    <header className="topHeader">
      <Speak />
      {langage === "french" ? (
        <p>bienvenue à bord du</p>
      ) : (
        <p>welcome aboard the</p>
      )}
      <h2>PORTFOLIO</h2>
      <Navbar />
    </header>
  );
};
export default Header;
