import { AppRouter } from "../router/AppRouter";
import { AppProvider } from "../context/AppContext";
import { NavBar } from "../components/NavBar";

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
