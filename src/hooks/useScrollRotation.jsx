import { useEffect, useState, useRef } from "react";

const useScrollRotation = () => {
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      // Détermine le sens du scroll
      if (delta !== 0) {
        setRotation((prev) => prev + (delta > 0 ? 10 : -10));
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return rotation;
};

export default useScrollRotation;
