import "../styles/Chip.css";

function Chip({ icon, text, onClick }) {
  return (
    <div className="Chip" onClick={onClick}>
      <div className="Chip__image-container">
        <img className="Chip__img" src={icon} alt="" />
      </div>
      <p className="Chip__text">{text}</p>
    </div>
  );
}

export { Chip };
