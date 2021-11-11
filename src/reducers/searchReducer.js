import {CLEAN_QUERY, FINISH_SEARCH, START_SEARCH, UPDATE_SELECTION} from "../constants";

export const initialSearchState = {
    loading: false,
    results: [],
    value: '',
}

export const searchReducer = (state=initialSearchState, action) => {
    switch (action.type) {
        case CLEAN_QUERY:
            return initialSearchState
        case START_SEARCH:
            return { ...state, loading: true, value: action.query }
        case FINISH_SEARCH:
            return { ...state, loading: false, results: action.results }
        case UPDATE_SELECTION:
            return { ...state, value: action.selection }
        default:
            return state
    }
}