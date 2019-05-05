import { put, takeEvery, call } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import axios from 'axios';

import { generatePlanet, fetchPlanetSuccessful } from '../Actions/generate.actions';
import { data } from '../../test.data';

function fetchNewPlanet() {
    return axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    // return data;
}

function* returnPlanet() {
    try {
        const result = yield call(fetchNewPlanet);
        yield put(fetchPlanetSuccessful(result.data));
    } catch {}
}

function* fetchPlanetSaga() {
    yield takeEvery(getType(generatePlanet), returnPlanet);
}

export default fetchPlanetSaga;
