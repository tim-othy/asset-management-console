import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'

import {
    fetchAssetDataSucceeded,
    fetchAssetDataFailed
} from '../actions';

function* fetchAssetDataSaga() {
    yield takeLatest("FETCH_ASSET_DATA_REQUESTED", fetchAssetData);
}

function* fetchAssetData(action) {
    try {
        const response = yield call(
            fetchData,
            action.targetAsset
        );
        const assetData = response.items.timeseries
        const targetAsset = action.targetAsset
        // yield put(fetchAssetDataSucceeded(assetData, targetAsset))
        yield put({
            type: "FETCH_ASSET_DATA_SUCCEEDED",
            data: response.items.timeseries,
            targetAsset: action.targetAsset
        })
    } catch (e) {
        yield put(fetchAssetDataFailed())
    }
}

const fetchData = async (targetAsset) => {
    const url = `http://127.0.0.1:5000/timeseries/${targetAsset}`;
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