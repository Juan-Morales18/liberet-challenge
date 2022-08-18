import { Date } from ".";
import "../styles/Dates.css";

function Dates() {
  const currentDate = { day: "jue", num: "02" };

  let dates = [
    { day: "dom", num: "28" },
    { day: "lun", num: "29" },
    { day: "mar", num: "30" },
    { day: "mie", num: "01" },
    { day: "jue", num: "02" },
    { day: "vie", num: "03" },
    { day: "sab", num: "04" },
  ];

  dates = dates.map((date) =>
    date.day === currentDate.day && date.num === currentDate.num
      ? { ...date, selected: true }
      : date
  );

  return (
    <section className="Dates">
      <ul className="Dates__list">
        {dates.map((date) => {
          return (
            <li key={date.day}>
              <Date date={date} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export { Dates };
