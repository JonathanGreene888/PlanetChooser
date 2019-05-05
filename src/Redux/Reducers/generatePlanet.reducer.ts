import { getType } from 'typesafe-actions';

import { fetchPlanetSuccessful } from '../Actions/generate.actions';
import { GenerateAction } from '../Actions/actions.types';
import { RootState } from '../../state';

const initialState = {};

export default (state: RootState = initialState, action: GenerateAction) => {
    switch (action.type) {
        case getType(fetchPlanetSuccessful): {
            return {
                ...state,
                planet: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
