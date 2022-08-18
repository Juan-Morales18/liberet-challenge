import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useFetch } from "../hooks/useFetch";
import { baseApiUrl } from "../consts/baseApiUrl";
import { getCategoriesService } from "../services/getCategoriesService";
import { Label } from "./Label";

import "../styles/ChipOptions.css";

const categoriesUrl = baseApiUrl + "categories.php";

function CategoriesChip() {
  const { category: defaultCategory, setCategory } = useContext(AppContext);

  const { data, isLoading, error } = useFetch(
    getCategoriesService,
    categoriesUrl
  );

  return (
    <div className="ChipOptions">
      <p className="ChipOptions__title">Categorias Disponibles</p>
      {isLoading && <p>Loading...</p>}

      <div className="ChipOptions__labels">
        {data.categories?.length > 0 &&
          data.categories.map((category) => (
            <Label
              key={category.idCategory}
              onClick={() => setCategory(category.strCategory)}
              text={category.strCategory}
              selected={category.strCategory === defaultCategory}
            />
          ))}
      </div>
    </div>
  );
}

export { CategoriesChip };
