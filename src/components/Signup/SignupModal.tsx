import React from "react";
import { Modal } from "@material-ui/core";
import styles from "./Signup.module.css";
import Signup from "./Signup";

interface Props {
  openModal: boolean;
  closeModal: () => void;
}

const SignupModal: React.FC<Props> = ({ openModal, closeModal }) => {
  return (
    <div>
      <Modal open={openModal} onClose={closeModal}>
        <div className={styles.modal}>
          <Signup />
        </div>
      </Modal>
    </div>
  );
};

export default SignupModal;
