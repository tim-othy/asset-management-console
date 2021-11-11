import React, {
    useReducer,
    useCallback,
    useEffect
} from "react";
import { connect } from 'react-redux';

import {tickers} from "../constants"
import { searchReducer, initialSearchState } from '../reducers'

import _ from 'lodash'
import { Search } from 'semantic-ui-react'
import {
    cleanQuery,
    fetchAssetDataRequested,
    finishSearch,
    startSearch,
    updateSelection
} from "../actions";

const source = tickers

export const AssetSelector = (props) => {
    const [state, dispatch] = useReducer(searchReducer, initialSearchState)
    const { loading, results, value } = state

    const timeoutRef = React.useRef()
    const handleSearchChange = useCallback(
        (e, data) => {
            clearTimeout(timeoutRef.current)
            dispatch(startSearch(data.value))

            timeoutRef.current = setTimeout(
                () => {
                    if (data.value.length === 0) {
                        dispatch(cleanQuery())
                        return
                    }

                    const re = new RegExp(_.escapeRegExp(data.value), 'i')
                    const isMatch = (result) => re.test(result.title)

                    dispatch(finishSearch(_.filter(source, isMatch)))
                },
                300
            )
        },
        []
    )

    useEffect(
        () => (() => { clearTimeout(timeoutRef.current) }),
        []
    )

    return (
        <Search
            style={{width: "500ps"}}
            loading={loading}
            onResultSelect={
                (e, data) => {
                    dispatch(updateSelection(data.result.title));
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
    fetchAssetDataRequested: (targetAsset) => dispatch(fetchAssetDataRequested(targetAsset))
});

export default connect(mapStateToProps, mapDispatchToProps)(AssetSelector);
