import React, { useState } from 'react';
import Charts from './Charts';

const Unusedchart = () => {
    const [user1, setuser] = useState([]);
    const [year1, setyear1] = useState('')
    const [year2, setyear2] = useState('')
    const [semeter, setsemester] = useState('')
    const handleyear1 = (event) => {
        setyear1(event.target.value)
    }

    const handleyear2 = (event) => {
        setyear2(event.target.value)
    }
    const handlesemester = (event) => { setsemester(event.target.value) }
    const handlesubmit = (event) => {
        event.preventDefault();
        console.log(year1,year2,semeter);
        const user={year1,year2,semeter}
        fetch("http://localhost:5000/unused",
        {
            headers: {

                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>setuser(data))

    }


    return (
        <div className=''>
            <div className='container'>
                <form className='d-flex justify-content-around' onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <input onBlur={handleyear1} placeholder='Year1' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">

                        <input onBlur={handleyear2} placeholder='Year2' type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <input onBlur={handlesemester} placeholder='Semester' type="text" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div>
                
            </div>
            <Charts data={user1}></Charts>
        </div>
    );
};

export default Unusedchart;