import { getType } from 'typesafe-actions';

import { fetchPlanetSuccessful } from '../Actions/generate.actions';
import { GenerateAction } from '../Actions/actions.types';
import { RootState } from '../../state';

const initialState: RootState = {};

export default (state = initialState, action: GenerateAction) => {
    switch (action.type) {
        case getType(fetchPlanetSuccessful): {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
