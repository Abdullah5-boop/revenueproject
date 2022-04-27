import React from 'react';

const ChartTable = (props) => {
    const Data = props.data
    console.log(Data);
    return (
        <div>
            <div className='container'>
            

                <table class="table">
                    <thead>
                        <tr>

                            <th scope="col">Year semeter</th>
                            <th scope="col">SLASS</th>
                            <th scope="col">SELS</th>
                            <th scope="col">SBE</th>
                            <th scope="col">SETS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map(data => <tr>
                            <td>{data.year} {data.semester}</td>
                            <td>{data.SLASS}</td>
                            <td>{data.SELS}</td>
                            <td>{data.SBE}</td>
                            <td>{data.SETS}</td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ChartTable;