import { AiFillCloseCircle } from "react-icons/ai";

export default function ModalContent({ onClose, image }) {
  return (
    <div className="modal">
      <img onClick={onClose} src={image} alt={`image ${image}`} />
      <div onClick={onClose} className="close">
        <AiFillCloseCircle />
      </div>
    </div>
  );
}
