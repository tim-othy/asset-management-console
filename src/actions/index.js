export const setTargetAsset = (targetAsset) => ({
        type: "SET_TARGET_ASSET",
        targetAsset
})

export const fetchAssetDataRequested = (targetAsset) => ({
    type: "FETCH_ASSET_DATA_REQUESTED",
    targetAsset
})

export const fetchAssetDataSucceeded = (assetData, targetAsset) => ({
    type: "FETCH_ASSET_DATA_SUCCEEDED",
    assetData,
    targetAsset
})

export const fetchAssetDataFailed = () => ({
    type: "FETCH_ASSET_DATA_FAILED"
})