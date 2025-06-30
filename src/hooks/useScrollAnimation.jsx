import { useEffect, useRef } from "react";

const useScrollAnimation = () => {
  const animatedElementsRef = useRef([]);

  useEffect(() => {
    animatedElementsRef.current = document.querySelectorAll(".animated");

    const handleScroll = () => {
      animatedElementsRef.current.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          element.classList.add("animate");
        } else {
          element.classList.remove("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // lancer une première vérif au mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useScrollAnimation;
