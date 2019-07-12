//const module = "general";

export const CHANGE_LANG = `general/CHANGE_LANG`;

const lang = window.navigator.language === "ru-RU" ? "ru" : "eng";

const defaultState = {
  lang: lang,
  openNameModal: ""
};

export default function reducer(generalState = defaultState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LANG:
      return {
        ...generalState,
        lang: payload
      };
    default:
      return generalState;
  }
}

export const changeLang = lang => ({
  type: CHANGE_LANG,
  payload: lang
});
