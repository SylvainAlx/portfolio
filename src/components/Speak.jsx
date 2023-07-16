import "/node_modules/flag-icons/css/flag-icons.min.css";
import { change, speak } from "../store.js";
import { FaLanguage } from "react-icons/fa";

const Speak = () => {
  const langage = speak.use();
  return (
    <div className="speakContainer">
      <span
        onClick={() => change("french")}
        className={`${langage === "english" && "gray"} fi fis fi-fr`}
      ></span>
      <span
        onClick={() => change("english")}
        className={`${langage === "french" && "gray"} fi fis fi-gb`}
      ></span>
    </div>
  );
};
export default Speak;
