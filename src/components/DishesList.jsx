import { getDishesByCategorieService } from "../services/getDishesByCategorieService";
import { baseApiUrl } from "../consts/baseApiUrl";
import { useFetch } from "../hooks/useFetch";
import { DishCard } from "./DishCard";
import "../styles/DishesList.css";

function DishesList() {
  const initialMeal = "beef";
  const url = baseApiUrl + `filter.php?c=${initialMeal}`;

  const {
    data: dishes,
    error,
    isLoading,
  } = useFetch(getDishesByCategorieService, url);

  console.log(dishes);

  return (
    <div>
      <div className="DishesList">
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
    </div>
  );
}

export { DishesList };
