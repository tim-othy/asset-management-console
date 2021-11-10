const initialState = {
    targetAsset: '',
    errorMessage: '',
    data: {},
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
            const data = action.data;
            return {
                ...state,
                targetAsset,
                data,
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