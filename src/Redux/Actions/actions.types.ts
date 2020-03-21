import { ActionType } from "typesafe-actions";

import * as generateActions from "./generate.actions";
import * as saveImageSuccessfull from "./save.actions";

export type GenerateAction = ActionType<typeof generateActions>;
export type SaveImageSuccessfull = ActionType<typeof saveImageSuccessfull>;
