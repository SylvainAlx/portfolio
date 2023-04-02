import "../../assets/scss/Legend.scss";

const Legend = (props) => {
  return (
    <aside>
      <h5>Bienvenue à bord !</h5>
      <h2>{props.room.name}</h2>
    </aside>
  );
};
export default Legend;
