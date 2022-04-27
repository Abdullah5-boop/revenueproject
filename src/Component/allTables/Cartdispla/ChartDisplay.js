import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ChartDisplay = (props) => {
    const data = props.Data
    return (
        <div>
            <div>
            <h1 className='text-center m-4'>REVENUE</h1>
                <ComposedChart width={1350} height={500} data={data}>
                    <XAxis dataKey="semesyr" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="revenue" barSize={20} fill="#413ea0" />

                </ComposedChart>
            </div>
            <div>
                <h1 className='text-center m-4'>REVENUE CHANGE</h1>
                <LineChart width={1350} height={500} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semesyr" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="change" stroke="#8884d8" />
                
            </LineChart></div>
        </div>
    );
};

export default ChartDisplay;