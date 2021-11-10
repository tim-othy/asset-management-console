import React from "react";
import { connect } from 'react-redux';

import {tickers} from "../constants/ticker-dictionary-filtered.js"

import _ from 'lodash'
import { Search } from 'semantic-ui-react'
import {fetchAssetDataRequested, setTargetAsset} from "../actions";

const source = tickers

const initialState = {
    loading: false,
    results: [],
    value: '',
}

function searchReducer(state, action) {
    switch (action.type) {
        case 'CLEAN_QUERY':
            return initialState
        case 'START_SEARCH':
            return { ...state, loading: true, value: action.query }
        case 'FINISH_SEARCH':
            return { ...state, loading: false, results: action.results }
        case 'UPDATE_SELECTION':
            return { ...state, value: action.selection }

        default:
            throw new Error()
    }
}

export const AssetSelector = (props) => {
    const [state, dispatch] = React.useReducer(searchReducer, initialState)
    const { loading, results, value } = state

    const timeoutRef = React.useRef()
    const handleSearchChange = React.useCallback((e, data) => {
        clearTimeout(timeoutRef.current)
        dispatch({ type: 'START_SEARCH', query: data.value })

        timeoutRef.current = setTimeout(() => {
            if (data.value.length === 0) {
                dispatch({ type: 'CLEAN_QUERY' })
                return
            }

            const re = new RegExp(_.escapeRegExp(data.value), 'i')
            const isMatch = (result) => re.test(result.title)

            dispatch({
                type: 'FINISH_SEARCH',
                results: _.filter(source, isMatch),
            })
        }, 300)
    }, [])
    React.useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [])

    return (
        <Search
            loading={loading}
            onResultSelect={(e, data) => {
                dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title });
                props.setTargetAsset(data.result.title)
                props.fetchAssetDataRequested(data.result.value)
            }
            }
            fluid={true}
            onSearchChange={handleSearchChange}
            results={results}
            value={value}
        />
    )
}

const mapStateToProps = (state) => ({
    targetAsset: state.targetAsset
})

const mapDispatchToProps = (dispatch) => ({
    setTargetAsset: (targetAsset) => dispatch(setTargetAsset(targetAsset)),
    fetchAssetDataRequested: (targetAsset) => dispatch(fetchAssetDataRequested(targetAsset))
});

export default connect(mapStateToProps, mapDispatchToProps)(AssetSelector);
