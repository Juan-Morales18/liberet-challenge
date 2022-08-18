import { AppRouter } from "./router/AppRouter";
import { AppProvider } from "./context/AppContext";
import { NavBar } from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <AppRouter>
        <NavBar />
      </AppRouter>
    </AppProvider>
  );
}

export default App;
