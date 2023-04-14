const RoomHeader = (props) => {
  return (
    <header>
      <h5>{props.roomName}</h5>
      <div className="roomImage">
        <img src={`.${props.image}`} />
      </div>
      <h3>{props.description}</h3>
    </header>
  );
};
export default RoomHeader;
