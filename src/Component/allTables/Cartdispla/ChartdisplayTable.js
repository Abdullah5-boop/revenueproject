import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const ChartdisplayTable = (props) => {
    const data = props.data;
    return (
        <div className='container'>
            <h1 className='text-center m-5'>REVENUE CHANGE</h1>
            <LineChart width={1350} height={500} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="smtryr" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="change" stroke="#8884d8" />
            </LineChart>
            <div>
            <h1 className='text-center m-5'>TOTAL REVENUE </h1>

                <LineChart width={1350} height={500} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="smtryr" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                   
                </LineChart>
            </div>

        </div>
    );
};

export default ChartdisplayTable;