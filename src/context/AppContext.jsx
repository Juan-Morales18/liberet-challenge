import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [date, setDate] = useState({ day: "Jue", num: "02" });
  const [category, setCategory] = useState("Beef");
  const [schedule, setSchedule] = useState("11.00 am - 12:00 am");

  const data = {
    date,
    setDate,
    category,
    setCategory,
    schedule,
    setSchedule,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
