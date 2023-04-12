const RoomHeader = (props) => {
  return (
    <header>
      <h5>{props.roomName}</h5>
      <h3>{props.description}</h3>
    </header>
  );
};
export default RoomHeader;
