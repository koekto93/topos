import { get } from "lodash";

export const getLang = state => get(state, ["general", "lang"]);
