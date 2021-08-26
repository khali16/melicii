import React from "react";
import { Modal } from "@material-ui/core";
import LogIn from "./LogIn";
import styles from "./LogInModal.module.css";

interface Props {
  openModal: boolean;
  closeModal: () => void;
}

const LogInModal: React.FC<Props> = ({ openModal, closeModal }) => {
  return (
    <div>
      <Modal open={openModal} onClose={closeModal}>
        <div className={styles.modal}>
          <LogIn />
        </div>
      </Modal>
    </div>
  );
};

export default LogInModal;
