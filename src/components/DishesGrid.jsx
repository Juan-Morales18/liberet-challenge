import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { DishCard } from "./DishCard";
import { getDishesByCategorieService } from "../services/getDishesByCategorieService";
import { baseApiUrl } from "../consts/baseApiUrl";
import { useFetch } from "../hooks/useFetch";

import "../styles/DishesGrid.css";

function DishesGrid() {
  const { category } = useContext(AppContext);

  const url = baseApiUrl + `filter.php?c=${category}`;
  const {
    data: dishes,
    isLoading,
    error,
  } = useFetch(getDishesByCategorieService, url);

  return (
    <div className="DishesGrid">
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        dishes.map((dish) => (
          <DishCard
            key={dish.id}
            id={dish.id}
            imgUrl={dish.image}
            name={dish.name}
            area={dish.area}
            tags={dish.tags}
          />
        ))}
    </div>
  );
}

export { DishesGrid };
