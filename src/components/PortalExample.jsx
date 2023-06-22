import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

export default function PortalExample({ work }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <img
        onClick={() => setShowModal(true)}
        src={work.image}
        alt={`image ${work.title}`}
      />
      {showModal &&
        createPortal(
          <ModalContent
            image={work.image}
            onClose={() => setShowModal(false)}
          />,
          document.querySelector(".App")
        )}
    </>
  );
}
