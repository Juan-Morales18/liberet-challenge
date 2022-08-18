import { useNavigate, NavLink } from "react-router-dom";
import { cartIcon, menuIcon, userIcon } from "../consts/consts";
import "../styles/NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="NavBar">
      <ul className="NavBar__list">
        <li className="NavBar__item" onClick={() => navigate("/cart")}>
          <img className="NavBar__img" src={cartIcon} alt="cart" />
        </li>
        <li className="NavBar__item" onClick={() => navigate("/")}>
          <img className="NavBar__img" src={menuIcon} alt="home" />
        </li>
        <li className="NavBar__item" onClick={() => navigate("/profile")}>
          <img className="NavBar__img" src={userIcon} alt="profile" />
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
