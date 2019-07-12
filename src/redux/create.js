import { createStore as _createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import reducer from "./modules";

export default function createStore() {
  const store = _createStore(reducer, applyMiddleware(logger));

  return store;
}
