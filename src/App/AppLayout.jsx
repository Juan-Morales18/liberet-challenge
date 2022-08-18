import { NavBar } from "../components/NavBar";

function AppLayout({ children }) {
  return (
    <>
      {children}
      <NavBar />
    </>
  );
}

export { AppLayout };
