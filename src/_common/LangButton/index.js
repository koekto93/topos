import React from 'react';

import './style.scss';

const LangButton = () => (
  <LangContext.Consumer>
    <div className="c-lang-button display-flex _a-center _j-center">
      <span>RU</span>
    </div>
  </LangContext.Consumer>
);

export default LangButton;
