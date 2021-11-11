import {
    cleanQuery,
    fetchAssetDataFailed,
    fetchAssetDataRequested,
    fetchAssetDataSucceeded,
    finishSearch,
    startSearch, updateSelection
} from "./index";
import {
    CLEAN_QUERY,
    FETCH_ASSET_DATA_FAILED,
    FETCH_ASSET_DATA_REQUESTED,
    FETCH_ASSET_DATA_SUCCEEDED, FINISH_SEARCH,
    START_SEARCH, UPDATE_SELECTION
} from "../constants";

test('should generate fetch asset data requested action', () => {
    const action = fetchAssetDataRequested('target-asset')
    expect(action).toEqual({
        type: FETCH_ASSET_DATA_REQUESTED,
        targetAsset: 'target-asset'
    })
})

test('should generate fetch asset data succeeded action', () => {
    const action = fetchAssetDataSucceeded([{'test': 'data'}], 'target-asset')
    expect(action).toEqual({
        type: FETCH_ASSET_DATA_SUCCEEDED,
        targetAsset: 'target-asset',
        assetData: [{'test': 'data'}]
    })
})

test('should generate fetch asset data failed action', () => {
    const action = fetchAssetDataFailed()
    expect(action).toEqual({
        type: FETCH_ASSET_DATA_FAILED
    })
})

test('should generate start search action', () => {
    const action = startSearch('test-query')
    expect(action).toEqual({
        type: START_SEARCH,
        query: 'test-query'
    })
})

test('should generate finish search action', () => {
    const action = finishSearch(['results'])
    expect(action).toEqual({
        type: FINISH_SEARCH,
        results: ['results']
    })
})

test('should generate clean query action', () => {
    const action = cleanQuery()
    expect(action).toEqual({
        type: CLEAN_QUERY
    })
})

test('should generate update selection action', () => {
    const action = updateSelection('selection')
    expect(action).toEqual({
        type: UPDATE_SELECTION,
        selection: 'selection'
    })
})