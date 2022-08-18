import { NavBar } from "../components/NavBar";

function PageLayout({ children }) {
  return (
    <>
      {children}
      <NavBar />
    </>
  );
}

export { PageLayout };
