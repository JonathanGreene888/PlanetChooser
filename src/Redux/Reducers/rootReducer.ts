import { combineReducers } from 'redux';

import generatePlanetReducer from './generatePlanet.reducer';

const rootReducer = combineReducers(generatePlanetReducer);

export default rootReducer;
