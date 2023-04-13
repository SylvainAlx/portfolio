import Footer from "./layouts/Footer";
import Separator from "./components/Separator";
import Commandant from "./components/rooms/Commandant";
import Bridge from "./components/rooms/Bridge";
import Communication from "./components/rooms/Communication";
import Engine from "./components/rooms/Engine";
import Laboratory from "./components/rooms/Laboratory";
import "./assets/scss/App.scss";

const App = () => {
  return (
    <div className="App">
      <main>
        <Commandant />
        <Separator />
        <Communication />
        <Separator />
        <Bridge />
        <Separator />
        <Engine />
        <Separator />
        <Laboratory />
      </main>
      <Footer />
    </div>
  );
};

export default App;
