import "../styles/Date.css";

function Date({ date }) {
  const { day, num, selected } = date;

  return (
    <div className="Date">
      <p className="Date__title">{day}</p>
      <p className={`Date__number ${selected ? "Date__number--selected" : ""}`}>
        {num}
      </p>
    </div>
  );
}

export { Date };
