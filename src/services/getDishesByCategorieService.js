import { baseApiUrl } from "../consts/baseApiUrl";

async function getDishDetail(mealId) {
  const url = baseApiUrl + `lookup.php?i=${mealId}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      return { error: true, message: "An error ocurred" };
    }
  } catch (error) {
    return { error: true, message: "An error ocurred" };
  }
}

async function getDishesByCategorieService(url) {
  console.log("Ejecutando service");
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      //Get dishes detail
      const dishesList = [];

      //Promises array
      const detailPromises = data.meals.map((dish) =>
        getDishDetail(dish.idMeal)
      );

      const dishesDetail = await Promise.all(detailPromises);

      for (const dish of dishesDetail) {
        const dishInfo = {
          id: dish.meals[0].idMeal,
          name: dish.meals[0].strMeal,
          area: dish.meals[0].strArea,
          tags: dish.meals[0].strTags,
          image: dish.meals[0].strMealThumb,
        };

        dishesList.push(dishInfo);
      }
      console.log(dishesList);
      return { error: false, data: dishesList };
    } else {
      return { error: true, message: "An error ocurred" };
    }
  } catch (error) {
    return { error: true, message: "An error ocurred" };
  }
}

export { getDishesByCategorieService };
