import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = (props) => {
    const Data = props.data;
    console.log(Data)
    return (
        <div>
            <div>
                <BarChart width={1830} height={550} data={Data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year_semester" />
                    <XAxis dataKey="school_title" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="avgroomcap" stroke="#82ca9d" />
                    <Bar dataKey="unused" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Charts;