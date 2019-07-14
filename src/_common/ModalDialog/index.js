import React from 'react';
import Modal from 'react-modal';

const defaultStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '8px',
    border: '0',
    background: 'transparent',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.75)',
  },
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
