import "../assets/scss/Button.scss";

const Button = (props) => {
  const handleClick = (e) => {
    window.open(props.link, "_blank");
  };

  return (
    <div className="button" onClick={handleClick}>
      {props.text}
    </div>
  );
};

export default Button;
