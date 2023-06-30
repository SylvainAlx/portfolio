import Separator from "./components/Separator";
import Bridge from "./components/rooms/Bridge";
import Communication from "./components/rooms/Communication";
import Crew from "./components/rooms/Crew";
import Observatory from "./components/rooms/Observatory";
import "./assets/scss/App.scss";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Engine from "./components/rooms/Engine";
import Stripes from "./components/Stripes";

const App = () => {
  const width = window.innerWidth;

  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animated");
    const handleScroll = () => {
      animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add("animate");
        } else {
          element.classList.remove("animate");
        }
      });
    };
    if (width >= 1000) {
      animatedElements.forEach((element) => {
        element.classList.remove("animated");
        element.classList.add("animate");
      });
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Stripes />
        <Crew />
        <Stripes />
        <Separator />
        <Stripes />
        <Communication />
        <Stripes />
        <Separator />
        <Stripes />
        <Bridge />
        <Stripes />
        <Separator />
        <Stripes />
        <Engine />
        <Stripes />
        <Separator />
        <Stripes />
        <Observatory />
        <Stripes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
