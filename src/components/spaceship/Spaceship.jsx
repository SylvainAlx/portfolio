import "../../assets/scss/Spaceship.scss";

const Spaceship = (props) => {
  const handleClick = (e) => {
    props.setRoom(props.children[e.target.id]);
  };

  return (
    <div className="spaceship">
      {props.children.map((child, i) => {
        return (
          <img
            key={i}
            id={i}
            src={child.url}
            className={`room ${child.name}`}
            onClick={handleClick}
          />
        );
      })}
      <img src={props.url} className="background" />
    </div>
  );
};
export default Spaceship;
