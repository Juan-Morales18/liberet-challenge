import "../styles/Label.css";

function Label({ text, selected, onClick }) {
  return (
    <div
      className={`Label ${selected ? "Label--selected" : ""}`}
      onClick={onClick}
    >
      <p className="Label__text">{text}</p>
    </div>
  );
}

export { Label };
