import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

export default function Modal({ work }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <img
        onClick={() => setShowModal(true)}
        src={work.image}
        alt={`image ${work.title}`}
        loading="lazy"
      />
      {showModal &&
        createPortal(
          <ModalContent
            image={work.image}
            title={work.title}
            onClose={() => setShowModal(false)}
          />,
          document.querySelector(".App")
        )}
    </>
  );
}
