import Separator from "./components/Separator";
import Bridge from "./components/rooms/Bridge";
import Communication from "./components/rooms/Communication";
import Engine from "./components/rooms/Engine";
import Crew from "./components/rooms/Crew";
import Hold from "./components/rooms/Hold";
import Laboratory from "./components/rooms/Laboratory";
import Observatory from "./components/rooms/Observatory";
import Photography from "./components/rooms/Photography";
import "./assets/scss/App.scss";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useRecoilState } from "recoil";
import { dotState } from "./utils/state";

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
    if (width >= 1300) {
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
        <Separator />
        <Crew />
        <Separator />
        <Communication />
        <Separator />
        <Bridge />
        <Separator />
        <Hold />
        <Separator />
        <Engine />
        <Separator />
        <Laboratory />
        <Separator />
        <Photography />
        <Separator />
        <Observatory />
      </main>
      <Footer />
    </div>
  );
};

export default App;
