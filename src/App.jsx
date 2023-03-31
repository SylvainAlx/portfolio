import Header from "./layouts/Header";
import Home from "./Pages/Home";
import Footer from "./layouts/Footer";
import "./assets/scss/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
