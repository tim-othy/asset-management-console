const initialState = {
    targetAsset: '',
    errorMessage: '',
    assetData: [
        {
            "date": "2016/05/13",
            "close": 90.52,
            "volume": 44223040,
            "open": 90,
            "high": 91.67,
            "low": 90
        },
    ]
}

export const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_ASSET_DATA_REQUESTED":
            return {
                ...state,
                targetAsset: action.targetAsset
            }
        case "FETCH_ASSET_DATA_SUCCEEDED":
            const targetAsset = action.targetAsset;
            const assetData = action.assetData;
            return {
                ...state,
                targetAsset,
                assetData,
                errorMessage: ''
            }
        case "FETCH_ASSET_DATA_FAILED":
            return {
                ...state,
                errorMessage: 'Failed to fetch asset data'
            }
        default:
            return state
    }
}
