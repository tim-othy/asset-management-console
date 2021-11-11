import {
    FETCH_ASSET_DATA_FAILED,
    FETCH_ASSET_DATA_REQUESTED,
    FETCH_ASSET_DATA_SUCCEEDED
} from "../constants";

const initialState = {
    targetAsset: '',
    errorMessage: '',
    assetData: [
        {
            "date": "2016/05/13",
            "close": 0,
            "volume": 0,
            "open": 0,
            "high": 0,
            "low": 0
        },
    ]
}

export const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_ASSET_DATA_REQUESTED:
            return {
                ...state,
                targetAsset: action.targetAsset,
                errorMessage: ''
            }
        case FETCH_ASSET_DATA_SUCCEEDED:
            const assetData = action.assetData;
            return {
                ...state,
                assetData,
                errorMessage: ''
            }
        case FETCH_ASSET_DATA_FAILED:
            return {
                ...state,
                errorMessage: 'Failed to fetch asset data'
            }
        default:
            return state
    }
}
