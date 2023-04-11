import { useEffect, useState } from "react";
import { rooms, otherRooms } from "../utils/rooms";
import Room from "../components/Room";
import Nav from "../components/Nav";
import "../assets/scss/Home.scss";

const Home = () => {
  const [roomsToShow, setRoomsToShow] = useState([]);
  const [room, setRoom] = useState(0);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (room < rooms.length) {
        setRoomsToShow([...roomsToShow, rooms[room]]);
        setRoom(room + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [roomsToShow]);

  return (
    <main className="home">
      {roomsToShow !== undefined &&
        roomsToShow.map((room, i) => {
          return <Room key={i} room={room} />;
        })}
      <Nav showNext={showNext} setShowNext={setShowNext} />
      {showNext &&
        otherRooms !== undefined &&
        otherRooms.map((room, i) => {
          return <Room key={i} room={room} />;
        })}
    </main>
  );
};

export default Home;
