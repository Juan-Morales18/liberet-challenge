import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";
import { CartPage } from "../pages";
import { ProfilePage } from "../pages";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/*" element={<HomePage />}></Route>
    </Routes>
  );
}

export { AppRouter };
