import { useNavigate, NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="NavBar">
      <ul className="NavBar__list">
        <li className="NavBar__item">
          <NavLink to="/cart">
            {({ isActive }) => (
              <button
                className={`NavBar__btn NavBar__btn--cart ${
                  isActive ? "NavBar__btn--cart-selected" : "NavBar__btn--cart"
                }`}
              ></button>
            )}
          </NavLink>
        </li>
        <li className="NavBar__item">
          <NavLink to="/">
            {({ isActive }) => (
              <button
                className={`NavBar__btn  ${
                  isActive ? "NavBar__btn--home-selected" : "NavBar__btn--home"
                }`}
              ></button>
            )}
          </NavLink>
        </li>
        <li className="NavBar__item">
          <NavLink to="/profile">
            {({ isActive }) => (
              <button
                className={`NavBar__btn NavBar__btn--profile  ${
                  isActive
                    ? "NavBar__btn--profile-selected"
                    : "NavBar__btn--profile"
                }`}
              ></button>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
