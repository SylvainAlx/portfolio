import { AiFillCloseCircle } from "react-icons/ai";

export default function ModalContent({ onClose, image }) {
  return (
    <div className="modal">
      <div onClick={onClose} className="close">
        <AiFillCloseCircle />
        FERMER
      </div>
      <img src={image} alt={`image ${image}`} />
    </div>
  );
}
