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
  const handleClick = (e) => {
    const link = e.currentTarget.getAttribute("id");
    const name = e.currentTarget.getAttribute("name");
    name === "mail"
      ? window.open(`mailto:${link}`)
      : window.open(link, "_blank");
  };

  let Icon;
  if (props.name === "mail") {
    Icon = AiFillMail;
  } else if (props.name === "github") {
    Icon = AiFillGithub;
  } else if (props.name === "linkedin") {
    Icon = AiFillLinkedin;
  } else if (props.name === "place") {
    Icon = IoLocationSharp;
  } else {
    Icon = AiFillEye;
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
