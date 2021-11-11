import {searchReducer} from "../../reducers";
import {CLEAN_QUERY, FINISH_SEARCH, START_SEARCH, UPDATE_SELECTION} from "../../constants";

const initialSearchState = {
    loading: false,
    results: [],
    value: '',
}

test('should setup default values', () => {
    const state = searchReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialSearchState);
});

test('should reset initial state on CLEAN_QUERY', () => {
    const state = searchReducer(
        {
            loading: true,
            results: ['results'],
            value: 'target'
        },
        { type: CLEAN_QUERY }
    )

    expect(state).toEqual(initialSearchState)
})

test('should set loading true and populate value on START_SEARCH', () => {
    const state = searchReducer(
        initialSearchState,
        { type: START_SEARCH, query: 'query'}
    )

    expect(state).toEqual({
        loading: true,
        results: [],
        value: 'query'
    })
})

test('should set loading to false and populate results on FINISH_SEARCH', () => {
    const state = searchReducer(
        initialSearchState,
        {
            type: FINISH_SEARCH,
            results: ['results']
        }
    )

    expect(state).toEqual({
        loading: false,
        results: ['results'],
        value: ''
    })
})

test('should change value on UPDATE_SELECTION', () => {
    const state = searchReducer(
        initialSearchState,
        {
            type: UPDATE_SELECTION,
            selection: 'query'
        }
    )

    expect(state).toEqual({
        loading: false,
        results: [],
        value: 'query'
    })
})