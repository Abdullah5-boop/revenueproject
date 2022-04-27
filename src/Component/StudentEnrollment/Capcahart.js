import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Capcahart = (props) => {
    const Data=props.data;
    return (
        <div>
            <div className=' container'>
                <BarChart width={1330} height={550} data={Data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="smstrandyr" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="SLASS" fill="#8884d8" />
                    <Bar dataKey="SBE" fill="#82ca9d" />
                    <Bar dataKey="SETS" fill="#ed5b51" />
                    <Bar dataKey="SELS" fill="#925ced" />
                </BarChart>
            </div>
        </div>
    );
};

export default Capcahart;