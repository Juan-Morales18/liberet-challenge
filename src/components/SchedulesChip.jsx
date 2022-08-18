import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Label } from ".";
import { clockIcon } from "../consts/icons";

import "../styles/ChipOptions.css";

function SchedulesChip() {
  const { schedule: defaultSchedule, setSchedule } = useContext(AppContext);

  const schedules = [
    "11:00am - 12:00 am",
    "1:00pm - 2:00 pm",
    "2:00pm - 3:00 pm",
  ];

  return (
    <div className="ChipOptions">
      <div className="ChipOptions__header">
        <img className="ChipOptions__icon" src={clockIcon} alt="clock icon" />
        <p className="ChipOptions__title">Elige un horario de entrega</p>
      </div>
      <div className="ChipOptions__labels">
        {schedules.map((schedule) => (
          <Label
            key={schedule}
            onClick={() => setSchedule(schedule)}
            text={schedule}
            selected={schedule === defaultSchedule}
          />
        ))}
      </div>
    </div>
  );
}

export { SchedulesChip };
