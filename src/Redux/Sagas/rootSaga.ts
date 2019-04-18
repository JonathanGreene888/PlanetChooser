import { all } from 'redux-saga/effects';

import GeneratePlanet from './generatePlanet.saga';

// Add new sagas here
export default function* RootSaga() {
    yield all([GeneratePlanet()]);
}
