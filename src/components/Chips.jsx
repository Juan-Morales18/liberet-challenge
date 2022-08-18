import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Chip } from "./Chip";
import { clockIcon, cutleryIcon, plusOneIcon } from "../consts/icons";

import "../styles/Chips.css";

function Chips({ handleOpen, setComponentToModal }) {
  const { category, schedule } = useContext(AppContext);

  const handleClickSchedule = () => {
    handleOpen(true);
    setComponentToModal("schedule");
  };

  const handleClickCategory = () => {
    handleOpen(true);
    setComponentToModal("categories");
  };

  const handleClickDishes = () => alert("+1 Dish was clicked :)");

  return (
    <section className="Chips">
      <ul className="Chips__list">
        <li className="Chips__item">
          <Chip
            icon={clockIcon}
            text={schedule}
            onClick={handleClickSchedule}
          />
        </li>
        <li className="Chips__item">
          <Chip
            icon={cutleryIcon}
            text={category}
            onClick={handleClickCategory}
          />
        </li>
        <li className="Chips__item">
          <Chip
            icon={plusOneIcon}
            text="Platillos"
            onClick={handleClickDishes}
          />
        </li>
      </ul>
    </section>
  );
}

export { Chips };
