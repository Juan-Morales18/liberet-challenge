import { Chip } from "./Chip";
import { clockIcon, cutleryIcon } from "../consts/consts";
import { Modal } from "./";
import { useModal } from "../hooks/useModal";

import "../styles/Chips.css";

function Chips({ handleOpen }) {
  const selectedTime = "2:00pm- 4:00pm";

  const handleClickTime = () => {
    handleOpen(true);
  };

  const handleClickKitchen = () => {
    handleOpen(true);
  };

  const handleClickDishes = () => {
    handleOpen(true);
  };

  return (
    <section className="Chips">
      <ul className="Chips__list">
        <li className="Chips__item">
          <Chip
            icon={clockIcon}
            text={selectedTime}
            onClick={handleClickTime}
          />
        </li>
        <li className="Chips__item">
          <Chip
            icon={cutleryIcon}
            text="Cocina industrial"
            onClick={handleClickKitchen}
          />
        </li>
        <li className="Chips__item">
          <Chip
            icon={cutleryIcon}
            text="Platillos"
            onClick={handleClickDishes}
          />
        </li>
      </ul>
    </section>
  );
}

export { Chips };
