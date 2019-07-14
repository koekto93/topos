import React from 'react';

import SVGIcon from '../../SVGIcon';
import Button from '../../Button';
import ModalDialog from '../../ModalDialog';
import { successModal } from '../../../constants/general';

import './style.scss';

const modalName = 'successModal';

const Success = ({ onClose, selectedModalName, lang }) => {
  const onSubmit = event => {
    onClose();
  };

  return (
    <ModalDialog
      isOpen={selectedModalName === modalName}
      onClose={onClose}
      //isMobile={isMobile}
    >
      <form className="l-success-form">
        <div className="l-success-form__close" onClick={onClose}>
          <SVGIcon name="close" />
        </div>
        <div className="l-success">
          <div className="l-success__caption">
            <span>{successModal.caption[lang]}</span>
          </div>
          <div className="l-success__description">
            <span>{successModal.description[lang]}</span>
          </div>
          <Button handleClick={onSubmit} text={successModal.button[lang]} />
        </div>
      </form>
    </ModalDialog>
  );
};

export default Success;
