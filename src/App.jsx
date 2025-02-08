import Separator from "./components/Separator";
import Bridge from "./components/rooms/Bridge";
import Communication from "./components/rooms/Communication";
import Crew from "./components/rooms/Crew";
import Observatory from "./components/rooms/Observatory";
import "./assets/scss/App.scss";
import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Engine from "./components/rooms/Engine";

const App = () => {
  const animatedElementsRef = useRef();
  useEffect(() => {
    animatedElementsRef.current = document.querySelectorAll(".animated");
    const handleScroll = () => {
      animatedElementsRef.current.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add("animate");
        } else {
          element.classList.remove("animate");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <Crew />
        <Separator />
        <Communication />
        <Separator />
        <Bridge />
        <Separator />
        <Engine />
        <Separator />
        <Observatory />
      </main>
      <Footer />
    </div>
  );
};

export default App;
