import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Bridge from "./components/rooms/Bridge";
import "./assets/scss/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Bridge />
      </main>
      <Footer />
    </div>
  );
};

export default App;
