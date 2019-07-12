import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";

import { getOpenModalName } from "../../../selectors/cabinet";

const defaultStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "8px",
    border: "0",
    background: "transparent"
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.75)"
  }
};

const defaultMobileStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    padding: "0",
    border: "0",
    background: "transparent"
  },
  overlay: {
    top: "59px"
  }
};

const ModalDialog = ({ isOpen, onClose, ...rest }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    style={defaultStyles}
    {...rest}
  />
);

export default ModalDialog;
