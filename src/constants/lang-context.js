import React from 'react';

const lang = window.navigator.language === 'ru-RU' ? 'ru' : 'eng';

export const LangContext = React.createContext(lang);
