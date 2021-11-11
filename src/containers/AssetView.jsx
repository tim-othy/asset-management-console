import React from "react";
import moment from "moment";

import { Charts, ChartContainer, ChartRow, YAxis, LineChart, BarChart, Resizable } from "react-timeseries-charts";
import { Collection, TimeSeries, TimeEvent, IndexedEvent, TimeRange } from "pondjs";

import {connect} from "react-redux";

const name = "AAPL-price";
const columns = ["time", "open", "close", "low", "high"];

var fmt = "YYYY-MM-DD";
var beginTime = moment("2020-01-01", fmt);
const endTime = moment()
// const beginTime = endTime.subtract(1, 'years')
var range = new TimeRange(beginTime, endTime);

export class AssetView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "linear",
            // timerange: new TimeRange([1624226400000, 1636412400000]),
            timerange: range,
            assetData: props.assetData
        };
    }

    handleTimeRangeChange = timerange => {
        this.setState({ timerange });
    };

    setModeLinear = () => {
        this.setState({ mode: "linear" });
    };

    setModeLog = () => {
        this.setState({ mode: "log" });
    };

    componentDidUpdate() {
        this.renderChart()
    }

    getTimeseries = () => {
        const events = this.props.assetData.map(item => {
            const timestamp = moment(new Date(item.date));
            const { open, close, low, high } = item;
            return new TimeEvent(timestamp.toDate(), {
                open: +open,
                close: +close,
                low: +low,
                high: +high
            });
        });
        const collection = new Collection(events);
        const sortedCollection = collection.sortByTime();
        return new TimeSeries({ name, columns, collection: sortedCollection });
    }

    getVolumeSeries = () => {
        const volumeEvents = this.props.assetData.map(item => {
            const index = item.date.replace(/\//g, "-");
            const { volume } = item;
            return new IndexedEvent(index, { volume: +volume });
        });
        const volumeCollection = new Collection(volumeEvents);
        const sortedVolumeCollection = volumeCollection.sortByTime();

        return new TimeSeries({
            name: "AAPL-volume",
            utc: false,
            collection: sortedVolumeCollection
        });

    }

    renderChart = () => {
        const timeSeries = this.getTimeseries()
        const seriesVolume = this.getVolumeSeries()

        const { timerange } = this.state;
        const croppedSeries = timeSeries.crop(timerange);
        const croppedVolumeSeries = seriesVolume.crop(timerange);
        return (
            <ChartContainer
                timeRange={timerange}
                hideWeekends={true}
                enablePanZoom={true}
                onTimeRangeChanged={this.handleTimeRangeChange}
                timeAxisStyle={{ axis: { fill: "none", stroke: "none" } }}
            >
                <ChartRow height="300">
                    <Charts>
                        <LineChart
                            axis="y"
                            style={{ close: { normal: { stroke: "steelblue" } } }}
                            columns={["close"]}
                            series={croppedSeries}
                            interpolation="curveBasis"
                        />
                    </Charts>
                    <YAxis
                        id="y"
                        label="Price ($)"
                        min={croppedSeries.min("close")}
                        max={croppedSeries.max("close")}
                        format=",.0f"
                        width="60"
                        type={this.state.mode}
                    />
                </ChartRow>
                <ChartRow height="200" axisMargin={0}>
                    <Charts>
                        <BarChart
                            axis="y"
                            style={{ volume: { normal: { stroke: "steelblue" } } }}
                            columns={["volume"]}
                            series={croppedVolumeSeries}
                        />
                    </Charts>
                    <YAxis
                        id="y"
                        label="Volume"
                        min={croppedVolumeSeries.min("volume")}
                        max={croppedVolumeSeries.max("volume")}
                        width="60"
                    />
                </ChartRow>
            </ChartContainer>
        );
    };

    render() {
        const linkStyle = {
            fontWeight: 600,
            color: "grey",
            cursor: "default"
        };

        const linkStyleActive = {
            color: "steelblue",
            cursor: "pointer"
        };

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>{this.props.targetAsset}</h3>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-12" style={{ fontSize: 14, color: "#777" }}>
                        <span
                            style={this.state.mode === "log" ? linkStyleActive : linkStyle}
                            onClick={this.setModeLinear}
                        >
                            Linear
                        </span>
                        <span> | </span>
                        <span
                            style={this.state.mode === "linear" ? linkStyleActive : linkStyle}
                            onClick={this.setModeLog}
                        >
                            Log
                        </span>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-12">
                        <Resizable>{this.renderChart()}</Resizable>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        targetAsset: state.targetAsset,
        assetData: state.assetData
    }
}

export default connect(mapStateToProps, null)(AssetView);