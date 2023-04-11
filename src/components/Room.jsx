import "../assets/scss/Room.scss";
import Button from "./Button";

const Room = (props) => {
  const { room } = props;

  return (
    <div name={room.title} className={`room ${room.className}`}>
      <header>
        <h5>{room.title}</h5>
        <h3>{room.description}</h3>
      </header>
      <div className="sections">
        <section>
          <h4>{room.section_1}</h4>
          <div className="list">
            {room.section_1_text !== undefined &&
              room.section_1_text.map((e, i) => {
                return <p key={i}>{e}</p>;
              })}
          </div>
        </section>
        {room.section_2 !== undefined && (
          <section>
            <h4>{room.section_2}</h4>
            <div className="list">
              {room.section_2_text !== undefined &&
                room.section_2_text.map((e, i) => {
                  return <p key={i}>{e}</p>;
                })}
            </div>
          </section>
        )}
        <Button text={room.button} link={room.button_link} />
      </div>
    </div>
  );
};
export default Room;
