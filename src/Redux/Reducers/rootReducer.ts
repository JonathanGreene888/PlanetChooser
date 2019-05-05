import { combineReducers } from 'redux';

import generatePlanetReducer from './generatePlanet.reducer';

export default () => combineReducers({ planet: generatePlanetReducer });
