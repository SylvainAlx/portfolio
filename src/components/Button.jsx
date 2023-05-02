import {
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
  AiFillEye,
} from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

const Button = (props) => {
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

  return (
    <div
      className="button animated"
      name={props.name}
      id={props.id}
      onClick={handleClick}
    >
      <Icon />
      {props.text}
    </div>
  );
};
export default Button;
