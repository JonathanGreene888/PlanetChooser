import { getType } from 'typesafe-actions';

import { fetchPlanetSuccessful } from '../Actions/generate.actions';

import { RootState } from '../../state';
import { GenerateAction } from '../Actions/actions.types';

export const initialState: RootState = {
    example: true,
};

export default (state = initialState, action: GenerateAction) => {
    switch (action.type) {
        case getType(fetchPlanetSuccessful): {
            return {
                ...state,
                example: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
