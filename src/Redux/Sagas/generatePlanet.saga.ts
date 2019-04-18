import { put, takeEvery, call } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import axios from 'axios';

import { generatePlanet, fetchPlanetSuccessful } from '../Actions/generate.actions';

function fetchNewPlanet() {
    return axios.get('/i am the api call to nasa planet');
}

function* returnPlanet() {
    try {
        const result = yield call(fetchNewPlanet);
        yield put(fetchPlanetSuccessful(result));
    } catch {}
}

function* fetchPlanetSaga() {
    yield takeEvery(getType(generatePlanet), returnPlanet);
}

export default fetchPlanetSaga;
