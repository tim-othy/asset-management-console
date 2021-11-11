import {
    SET_TARGET_ASSET,
    FETCH_ASSET_DATA_REQUESTED,
    FETCH_ASSET_DATA_SUCCEEDED,
    FETCH_ASSET_DATA_FAILED, START_SEARCH, FINISH_SEARCH, CLEAN_QUERY, UPDATE_SELECTION
} from '../constants'

export const setTargetAsset = (targetAsset) => ({
        type: SET_TARGET_ASSET,
        targetAsset
})

export const fetchAssetDataRequested = (targetAsset) => ({
    type: FETCH_ASSET_DATA_REQUESTED,
    targetAsset
})

export const fetchAssetDataSucceeded = (assetData, targetAsset) => ({
    type: FETCH_ASSET_DATA_SUCCEEDED,
    assetData: assetData,
    targetAsset
})

export const fetchAssetDataFailed = () => ({
    type: FETCH_ASSET_DATA_FAILED
})

export const startSearch = (query) => ({
    type: START_SEARCH,
    query,
})

export const finishSearch = (results) => ({
    type: FINISH_SEARCH,
    results,
})

export const cleanQuery = () => ({
    type: CLEAN_QUERY
})

export const updateSelection = (selection) => ({
        type: UPDATE_SELECTION,
        selection,
})