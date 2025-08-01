export default function ModalContent({ onClose, image, title }) {
  return (
    <div onClick={onClose} className="modal">
      <img src={image} alt={`image ${title}`} />
    </div>
  );
}
