import React from 'react';
import {
    AreaChart, Area, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import {connect} from 'react-redux';
import './WeatherChart.css';

const WeatherChart = ({ data, city, err }) => {

    const gradientOffset = () => {
        const dataMax = Math.max(...data.map(i => i.Temperature));
        const dataMin = Math.min(...data.map(i => i.Temperature));

        if (dataMax <= 0) {
            return 0;
        }
        if (dataMin >= 0) {
            return 1;
        }

        return dataMax / (dataMax - dataMin);
    };

    const off = gradientOffset();

    const ticks = [
        -20, -10, 0, 10, 20
    ];


    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{payload[0].value} &deg;C</p>
                    <p className="desc">Time : {payload[0].payload.Time}</p>
                    <p className="desc">Date : {payload[0].payload.Date}</p>
                </div>
            );
        }

        return null;
    };

    if (!data.length && !err) return null;
    return (
        <>
            {!err ? <span>Forecast for: {city}</span> : <span>{err}</span>}

            {!err && <AreaChart
                width={1000}
                height={400}
                data={data}
                margin={{
                    top: 10, right: 30, left: 0, bottom: 40,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <YAxis ticks={ticks}/>
                <Tooltip content={<CustomTooltip />} />
                <defs>
                    <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset={off} stopColor="yellow" stopOpacity={1} />
                        <stop offset={off} stopColor="blue" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <Area type="monotone" dataKey="Temperature" stroke="#000" fill="url(#splitColor)" />
            </AreaChart>}
        </>
    );
};



function mapStateToProps(state) {
    return {
        data: state.data,
        city: state.city,
        search_value: state.search_value,
        err: state.err
    };
}

export default connect(mapStateToProps)(WeatherChart);