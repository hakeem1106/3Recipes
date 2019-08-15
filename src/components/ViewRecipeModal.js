import React from "react";
import { Modal, ModalBody, ModalTitle, ModalFooter, ModalDialog, Button } from "react-bootstrap";

const ViewRecipeModal = () => {
  return (
    <ModalDialog>
      <Modal.Header closeButton>
        <ModalTitle>Modal title</ModalTitle>
      </Modal.Header>

      <ModalBody>
        <p>Modal body text goes here.</p>
      </ModalBody>

      <ModalFooter>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </ModalFooter>
    </ModalDialog>
  );
};

export default ViewRecipeModal;
