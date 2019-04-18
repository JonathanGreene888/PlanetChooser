import { createStandardAction } from 'typesafe-actions';
import { RootState } from '../../state';

export const generatePlanet = createStandardAction('GENERATE_PLANET')();

export const fetchPlanetSuccessful = createStandardAction('FETCH_PLANET_SUCCESSFUL').map((payload: RootState) => ({
    payload,
}));
