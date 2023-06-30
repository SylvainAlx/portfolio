export default function ModalContent({ onClose, image }) {
  return (
    <div onClick={onClose} className="modal">
      <img src={image} alt={`image ${image}`} />
    </div>
  );
}
