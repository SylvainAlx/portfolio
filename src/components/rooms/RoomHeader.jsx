const RoomHeader = (props) => {
  return (
    <header>
      <div className="roomImage">
        <img src={props.image} />
      </div>
      <div>
        <h5>{props.roomName}</h5>
        <h3>{props.description}</h3>
      </div>
    </header>
  );
};
export default RoomHeader;
