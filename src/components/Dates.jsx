import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Date } from ".";

import "../styles/Dates.css";

function Dates() {
  const { date: currentDate, setDate } = useContext(AppContext);

  let dates = [
    { day: "Dom", num: "28" },
    { day: "Lun", num: "29" },
    { day: "Mar", num: "30" },
    { day: "Mie", num: "01" },
    { day: "Jue", num: "02" },
    { day: "Vie", num: "03" },
    { day: "Sab", num: "04" },
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
            <li key={date.day} onClick={() => setDate(date)}>
              <Date date={date} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export { Dates };
