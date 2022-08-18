import { pinIcon, arrowMenuIcon } from "../consts/icons";
import "../styles/Header.css";

function Header() {
  return (
    <header className="Header">
      <ul className="Header__list">
        <li
          className="Header__item Header__item--group"
          onClick={() => alert("Location option was clicked")}
        >
          <div className="Header__image-container">
            <img className="Header__img" src={pinIcon} alt="location" />
          </div>
          <p>Select location...</p>
        </li>
        <li
          className="Header__image-container"
          onClick={() => alert("Menu was clicked")}
        >
          <img className="Header__img" src={arrowMenuIcon} alt="menu" />
        </li>
      </ul>
    </header>
  );
}

export { Header };
