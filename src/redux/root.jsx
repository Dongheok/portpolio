import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";

import { pageMoveEpic } from "./common/actions";
import common from "./common/resolver";

export const rootEpic = combineEpics(pageMoveEpic);

export const rootReducer = combineReducers({
  common,
});
