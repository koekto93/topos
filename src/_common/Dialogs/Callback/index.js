import React, { useState } from 'react';

import ModalDialog from '../../ModalDialog';
import Button from '../../Button';
import Input from '../../Input';
import SVGIcon from '../../SVGIcon';
import TextArea from '../../TextArea';
import { callbackModal } from '../../../constants/general';
import { sendForm } from '../../../api/general';

import './style.scss';

const modalName = 'callbackModal';

const Callback = ({
  onClose,
  selectedModalName,
  onChangeSelectedModalName,
  lang,
}) => {
  const [values, setValues] = useState({});

  const onSubmit = async event => {
    event.stopPropagation();
    const res = await sendForm(values);
    if (res) {
      setValues({});
      onChangeSelectedModalName('successModal');
    }
  };

  const handleChangeValue = ({ name, value }) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <ModalDialog
      isOpen={selectedModalName === modalName}
      onClose={onClose}
      //isMobile={isMobile}
    >
      <form name="send-form" className="l-callback-form">
        <div className="l-callback-form__close" onClick={onClose}>
          <SVGIcon name="close" />
        </div>
        <div className="l-callback">
          <article className="l-callback__name">
            <Input
              placeholder={callbackModal.name.placeholder[lang]}
              label={callbackModal.name.label[lang]}
              name="customerName"
              onChange={handleChangeValue}
              value={values['customerName']}
            />
          </article>
          <article className="l-callback__email">
            <Input
              placeholder={callbackModal.email.placeholder[lang]}
              label={callbackModal.email.label[lang]}
              name="customerEmail"
              value={values['customerEmail']}
              onChange={handleChangeValue}
              type="email"
            />
          </article>
          <article className="l-callback__request">
            <TextArea
              placeholder={callbackModal.request.placeholder[lang]}
              label={callbackModal.request.label[lang]}
              name="customerWorkDescription"
              onChange={handleChangeValue}
              value={values['customerWorkDescription']}
            />
          </article>
          <Button handleClick={onSubmit} text={callbackModal.button[lang]} />
        </div>
      </form>
    </ModalDialog>
  );
};

export default Callback;
