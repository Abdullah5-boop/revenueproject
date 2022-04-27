import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const ClassRoomView = (props) => {
    const data = props.Data
    return (
        <div>
            <div className='container'>
                <BarChart width={1330} height={500} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="avalable" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="slot7" fill="#8884d8" />
                    <Bar dataKey="slot8" fill="#82ca9d" />
                </BarChart>
            </div>
            <div className='container'>
                <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col">Capacity</th>
                            <th scope="col">Slot-7</th>
                            <th scope="col">Slot-8</th>
                            <th scope="col">Avalable Resourses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(data => <tr>
                                <td>{data.grd}</td>
                                <td>{data.slot7}</td>
                                <td>{data.slot8}</td>
                                <td>{data.avalable}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ClassRoomView;