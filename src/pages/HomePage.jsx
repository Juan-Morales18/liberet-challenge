import { useState } from "react";
import { AppLayout } from "../App/AppLayout";
import { Header } from "../components/Header";
import { Dates } from "../components/Dates";
import { Chips } from "../components/Chips";
import { DishesGrid } from "../components/DishesGrid";
import { useModal } from "../hooks/useModal";
import { Modal } from "../components";
import { CategoriesChip } from "../components/";
import { SchedulesChip } from "../components/";

import "../styles/HomePage.css";

function HomePage() {
  const { isOpen, handleOpen, handleClose } = useModal();
  const [componentToModal, setComponentToModal] = useState("");

  const renderComponent = () => {
    if (componentToModal === "schedule") {
      return <SchedulesChip />;
    }
    if (componentToModal === "categories") {
      return <CategoriesChip />;
    }
  };

  return (
    <main className="HomePage">
      <AppLayout>
        <section className="HomePage__head">
          <Header />
          <Dates />
          <Chips
            handleOpen={handleOpen}
            setComponentToModal={setComponentToModal}
          />
        </section>
        <section className="HomePage__body">
          <DishesGrid />
          {isOpen && (
            <Modal handleClose={handleClose}>{renderComponent()}</Modal>
          )}
        </section>
      </AppLayout>
    </main>
  );
}

export { HomePage };
