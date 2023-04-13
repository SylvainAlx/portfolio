import Separator from "./components/Separator";
import Commandant from "./components/rooms/Commandant";
import Bridge from "./components/rooms/Bridge";
import Communication from "./components/rooms/Communication";
import Engine from "./components/rooms/Engine";
import Crew from "./components/rooms/Crew";
import Laboratory from "./components/rooms/Laboratory";
import Observatory from "./components/rooms/Observatory";
import Photography from "./components/rooms/Photography";
import "./assets/scss/App.scss";
import { useState } from "react";

const App = () => {
  const [showNext, setShowNext] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleClick = () => {
    setShowNext(!showNext);
  };
  return (
    <div
      style={{ overflowY: "scroll" }}
      className="App"
      onScroll={handleScroll}
    >
      <main>
        <Commandant />
        <Separator />
        <h1>Scroll Position: {scrollPosition}</h1>
        <Communication />
        <Separator />
        <Bridge />
        <Separator />
        <Engine />
        <Separator />
        <Crew />
        <Separator />
        <Laboratory />
        <Separator />
        <div className="button learnMore" onClick={handleClick}>
          En savoir plus
        </div>
        {showNext && (
          <>
            <Photography />
            <Separator />
            <Observatory />
          </>
        )}
      </main>
    </div>
  );
};

export default App;
