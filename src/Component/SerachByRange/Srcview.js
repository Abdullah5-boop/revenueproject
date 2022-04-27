import React from 'react';
import ChartDisplay from '../allTables/Cartdispla/ChartDisplay';
import CustomHoolsrc from './CoustomHooksrc';

const Srcview = (props) => {
    const data = props.data
    console.log(data)


    // const user=CustomHoolsrc(data)

    return (
        <div className='container'>
            <div className='border border-3'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Yearandsemeter </th>
                            <th scope="col">Revenue</th>
                            <th scope="col">Last</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(Data =>
                                <tr>
                                    <td>{Data.semesyr}</td>
                                    <td>{Data.revenue}</td>
                                    <td>{Data.change}</td>
                                    {/* <td>{}</td> */}
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <ChartDisplay Data={data}></ChartDisplay>
        </div>
    );
};

export default Srcview;