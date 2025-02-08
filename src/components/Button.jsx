import {
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
  AiFillEye,
} from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { speak } from "../store";

const Button = (props) => {
  const langage = speak.use();

  const handleClick = () => {
    props.id.includes("@")
      ? window.open(`mailto:${props.id}`)
      : window.open(props.id, "_blank");
  };

  let Icon;
  switch (props.name) {
    case "mail":
      Icon = AiFillMail;
      break;
    case "github":
      Icon = AiFillGithub;
      break;
    case "linkedin":
      Icon = AiFillLinkedin;
      break;
    case "place":
      Icon = IoLocationSharp;
      break;
    default:
      Icon = AiFillEye;
      break;
  }

  const translate = () => {
    if (langage !== "french") {
      if (props.text === "code source") {
        return "source code";
      } else if (props.text === "voir le site") {
        return "website";
      } else {
        return props.text;
      }
    } else {
      return props.text;
    }
  };

  return (
    <div className="button" id={props.id} onClick={handleClick}>
      <Icon />
      <div>{translate()}</div>
    </div>
  );
};
export default Button;
