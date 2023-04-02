import { useEffect, useState } from "react";
import "../assets/scss/Home.scss";
import Legend from "../components/legend/Legend";
import Spaceship from "../components/spaceship/Spaceship";

const Home = () => {
  const url = "src/assets/images/spaceship-floor0.png";
  const [room, setRoom] = useState({});

  useEffect(() => {
    console.log(room);
  }, [room]);

  const children = [
    {
      name: "pont",
      url: "src/assets/images/bridge.png",
    },
  ];
  return (
    <main className="home">
      <Legend room={room} />
      <Spaceship url={url} children={children} setRoom={setRoom} />
    </main>
  );
};

export default Home;
