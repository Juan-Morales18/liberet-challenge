import { pinIcon } from "../consts/consts";
import "../styles/Header.css";

function Header() {
  return (
    <header className="Header">
      <ul className="Header__list">
        <li className="Header__item Header__item--group">
          <div className="Header__image-container">
            <img className="Header__img" src={pinIcon} alt="location" />
          </div>
          <p>Select location...</p>
        </li>
        <li className="Header__image-container">
          <img className="Header__img" src={pinIcon} alt="" />
        </li>
      </ul>
    </header>
  );
}

export { Header };
