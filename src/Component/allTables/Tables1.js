import React, { useEffect, useState } from 'react';
import ChartDisplay from './Cartdispla/ChartDisplay';
import ChartdisplayTable from './Cartdispla/ChartdisplayTable';
import CustomHookForTable1 from './CustomHookForTable1';
import Table1Views from './Table1Views';

const Tables1 = () => {
    const [user, setuser] = CustomHookForTable1()
    console.log(user)
    
    
    return (
        <div className='mb-5'>
           {/* {<Table1Views data={user}></Table1Views>} */}
           <h1 className='text-center M-5'>REVENUE TABLE</h1>
            <div className='container'>
                <table class="table border border-4">
                    <thead>
                        <tr>
                            <th scope="col">Year</th>
                            <th scope="col">SALSS</th>
                            <th scope="col">SELS</th>
                            <th scope="col">SBE</th>
                            <th scope="col">SETS</th>
                            <th scope="col">SPPH</th>
                            <th scope="col">TOTAL</th>
                            <th scope="col">Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(data=>(
                            <tr>
                                <td>{data.smtryr}</td>
                                <td>{data.totalsalss}</td>
                                <td>{data.totalSELS}</td>
                                <td>{data.totalSBE}</td>
                                <td>{data.totalsets}</td>
                                <td>{data.totalSPPH}</td>
                                <td>{data.total}</td>
                                <td>{data.change} % </td>

                            </tr>))
                        }

                        {/* <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <ChartdisplayTable data={user}></ChartdisplayTable>
        </div>
    );
};

export default Tables1;