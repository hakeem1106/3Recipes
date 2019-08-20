import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  ModalTitle,
  ModalFooter,
  ModalDialog,
  Button
} from "react-bootstrap";

class ViewRecipeModal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <ModalDialog>
        <Modal.Header>
          <ModalTitle>Mom's Spaghetti</ModalTitle>
        </Modal.Header>

        <ModalBody>
          <h6>Ingredients</h6>
          <p>Spaghetti</p>
          <p>Pasta Sauce</p>
          <p>1/2lb Beef</p>
          <p>Parmesean Cheese</p>
          <p>1Tbsp Basil</p>
          <h6>Prep Time</h6>
          <p>10 minutes</p>
          <h6>Cook Time</h6>
          <p>30 minutes</p>
        </ModalBody>

        <ModalFooter>
          <Button
            className="close-modal"
            variant="secondary"
            onClick={this.onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalDialog>
    );
  }
}

export default ViewRecipeModal;
