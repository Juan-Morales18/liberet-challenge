import { AppRouter } from "./router/AppRouter";
import "./App.css";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <AppRouter>
      <NavBar />
    </AppRouter>
  );
}

export default App;
