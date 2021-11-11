import {rootReducer} from "../../reducers";
import {FETCH_ASSET_DATA_FAILED, FETCH_ASSET_DATA_REQUESTED, FETCH_ASSET_DATA_SUCCEEDED} from "../../constants";

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

test('should setup default values', () => {
    const state = rootReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
});

test('should set targetAsset on FETCH_ASSET_DATA_REQUESTED action', () => {
    const state = rootReducer(
        initialState,
        {
            type: FETCH_ASSET_DATA_REQUESTED,
            targetAsset: 'test-asset'
        }
    )
    expect(state).toEqual({
        targetAsset: 'test-asset',
        errorMessage: '',
        assetData: [
            {
                'date': '2016/05/13',
                "close": 0,
                "volume": 0,
                "open": 0,
                "high": 0,
                "low": 0
            }
        ]
    })
})

test('should populate assetData on FETCH_ASSET_DATA_SUCCEEDED', () => {
    const state = rootReducer(
        initialState,
        {
            type: FETCH_ASSET_DATA_SUCCEEDED,
            assetData: [
                {
                    'date': '2016/05/20',
                    "close": 100,
                    "volume": 100,
                    "open": 100,
                    "high": 100,
                    "low": 100
                }
            ]
        }
    )

    expect(state).toEqual({
        targetAsset: '',
        errorMessage: '',
        assetData: [
            {
                'date': '2016/05/20',
                "close": 100,
                "volume": 100,
                "open": 100,
                "high": 100,
                "low": 100
            }
        ]
    })
})

test('should populate errorMessage on FETCH_ASSET_DATA_FAILED', () => {
    const state = rootReducer(
        initialState,
        {
            type: FETCH_ASSET_DATA_FAILED
        }
    )

    expect(state).toEqual({
        targetAsset: '',
        errorMessage: 'Failed to fetch asset data',
        assetData: [
            {
                'date': '2016/05/13',
                "close": 0,
                "volume": 0,
                "open": 0,
                "high": 0,
                "low": 0
            }
        ]
    })})