import Bridge from "./components/rooms/Bridge";
import Communication from "./components/rooms/Communication";
import Crew from "./components/rooms/Crew";
import Observatory from "./components/rooms/Observatory";
import "./assets/scss/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Engine from "./components/rooms/Engine";
import Gear from "./components/Gear";

import useScrollAnimation from "./hooks/useScrollAnimation";

const App = () => {
  useScrollAnimation();

  return (
    <div className="App">
      <Header />
      <main>
        <Crew />
        <Gear />
        <Communication />
        <Gear />
        <Bridge />
        <Gear />
        <Engine />
        <Gear />
        <Observatory />
      </main>
      <Footer />
    </div>
  );
};

export default App;
