import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useFetch } from "../hooks/useFetch";
import { baseApiUrl } from "../consts/baseApiUrl";
import { getCategoriesService } from "../services/getCategoriesService";
import { Label } from "./Label";
import { cutleryIcon } from "../consts/icons";

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
      <div className="ChipOptions__header">
        <img
          className="ChipOptions__icon"
          src={cutleryIcon}
          alt="cutlery icon"
        />
        <p className="ChipOptions__title">Elige un servicio</p>
      </div>
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
