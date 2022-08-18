import { AppLayout } from "../App/AppLayout";
import { Header } from "../components/Header";
import { Dates } from "../components/Dates";
import { Chips } from "../components/Chips";
import { DishesList } from "../components/DishesList";
import { useModal } from "../hooks/useModal";
import { Modal } from "../components";

function HomePage() {
  const { isOpen, handleOpen, handleClose } = useModal();

  return (
    <div className="page">
      <AppLayout>
        <div className="head-section">
          <Header />
          <Dates />
          <Chips handleOpen={handleOpen} />
        </div>
        <div className="body-section">
          <DishesList />
          {isOpen && <Modal handleClose={handleClose}></Modal>}
        </div>
      </AppLayout>
    </div>
  );
}

export { HomePage };
