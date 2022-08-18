import { clockIcon } from "../consts/icons";
import { formatCurrency } from "../helpers/formatCurrency";
import "../styles/DishCard.css";

function DishCard({ imgUrl, id, name, area, tags }) {
  const formatTag = tags ? tags.split(",")[0] : "";

  return (
    <article className="DishCard">
      <div className="DishCard__img-container">
        <img className="DishCard__img" src={imgUrl} alt="" />
        {formatTag !== "" && <p className="DishCard__tag">{formatTag}</p>}
        <div className="DishCard__text">
          <h5 className="DishCard__area">{area}</h5>
          <h5 className="DishCard__name">{name}</h5>
        </div>
      </div>
      <div className="DishCard__footer">
        <div className="DishCard__img-container--icon">
          <img src={clockIcon} className="DishCard__img" alt="clock" />
        </div>
        <p className="DishCard__price">{formatCurrency(id)}</p>
      </div>
    </article>
  );
}

export { DishCard };
