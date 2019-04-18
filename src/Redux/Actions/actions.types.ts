import { ActionType } from 'typesafe-actions';

import * as generateActions from './generate.actions';

export type GenerateAction = ActionType<typeof generateActions>;
