import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'

import axios from 'axios'

import {
    fetchAssetDataSucceeded,
    fetchAssetDataFailed
} from '../actions';

function* fetchAssetDataSaga() {
    console.log("called fetchAssetDataSaga")
    yield takeLatest("FETCH_ASSET_DATA_REQUESTED", fetchAssetData);
}

function* fetchAssetData(action) {
    console.log("called fetchAssetData")
    try {
        // const response = yield call(axios.get, 'http://localhost:5000/timeseries/AE')
        const response = yield call(
            fetchAlphaVantageExchangeRate,
            action.targetAsset
        );
        console.log('resopnse', response.items.timeseries)
        yield put({ type: "FETCH_ASSET_DATA_SUCCEEDED", data: response.items.timeseries})
    } catch (e) {
        console.log("failed")
        yield put(fetchAssetDataFailed())
    }
}

const fetchAlphaVantageExchangeRate = async (targetAsset) => {
    const url = `http://127.0.0.1:5000/timeseries/${targetAsset}`;
    // const url = 'http://127.0.0.1:5000/timeseries/AE'
    const response = await fetch(
        url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    return await response.json();
}

export default fetchAssetDataSaga;