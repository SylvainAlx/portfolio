import { useEffect, useState } from "react";
import { rooms } from "../utils/rooms";
import Room from "../components/Room";
import "../assets/scss/Home.scss";

const Home = () => {
  const [itemsToShow, setItemsToShow] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < rooms.length) {
        setItemsToShow([...itemsToShow, rooms[index]]);
        setIndex(index + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [itemsToShow]);

  return (
    <main className="home">
      {itemsToShow !== undefined &&
        itemsToShow.map((room, i) => {
          return <Room key={i} room={room} />;
        })}
    </main>
  );
};

export default Home;
