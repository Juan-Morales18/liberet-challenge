import "../styles/Modal.css";

function Modal({ children, handleClose }) {
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <article className="Modal" onClick={handleClose}>
      <div className="Modal-container" onClick={handleModalContainerClick}>
        {children}
      </div>
    </article>
  );
}

export { Modal };
