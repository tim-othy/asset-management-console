export const setTargetAsset = (targetAsset) => {
    console.log('targetAsset')
    console.log(targetAsset)
    return {
        type: "SET_TARGET_ASSET",
        targetAsset
    }
}

export const fetchAssetDataRequested = (targetAsset) => {
    console.log("called fetchAssetDataRequested")
    return {
        type: "FETCH_ASSET_DATA_REQUESTED",
        targetAsset
    }
}

export const fetchAssetDataSucceeded = (assetData) => {
    console.log("called fetchAssetDataSucceeded")
    return {
        type: "FETCH_ASSET_DATA_SUCCEEDED",
        assetData
    }
}

export const fetchAssetDataFailed = () => {
    console.log("called fetchAssetDataFailed")
    return {
        type: "FETCH_ASSET_DATA_FAILED"
    }
}