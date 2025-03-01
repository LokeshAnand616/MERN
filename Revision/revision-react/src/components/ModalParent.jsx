import React, { useState } from "react";
import Modal from "./Modal";

const ModalParent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>React Portal Example</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>This is a Modal</h2>
        <p>Rendered using React Portal!</p>
      </Modal>
    </div>
  );
};

export default ModalParent;
