import {rootReducer} from "../../reducers";
import {FETCH_ASSET_DATA_REQUESTED} from "../../constants";

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
