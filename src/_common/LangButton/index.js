import React from 'react';
import { connect } from 'react-redux';

import { changeLang } from '../../redux/modules/general';
import { getLang } from '../../selector/general';
import './style.scss';

const LangButton = ({ lang, changeLang }) => {
  const handleToggleLang = event => {
    event.stopPropagation();
    changeLang(lang === 'ru' ? 'eng' : 'ru');
  };
  return (
    <div
      onClick={handleToggleLang}
      className="c-lang-button display-flex _a-center _j-center"
    >
      <span>{lang === 'ru' ? 'EN' : 'RU'}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  lang: getLang(state),
});
export default connect(
  mapStateToProps,
  { changeLang },
)(LangButton);
