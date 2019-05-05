import { getType } from 'typesafe-actions';

import { fetchPlanetSuccessful } from '../Actions/generate.actions';
import { GenerateAction } from '../Actions/actions.types';
import { PictureState } from '../../state';

const initialState: PictureState = {};

export default (state = initialState, action: GenerateAction) => {
    switch (action.type) {
        case getType(fetchPlanetSuccessful): {
            return {
                ...state,
                picture: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
