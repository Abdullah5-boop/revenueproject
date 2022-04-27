import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Capcahart from './Capcahart';
import ChartTable from './ChartTable';

const Capacity = () => {
    const [user,setuser]=useState([]);
    const [year1, setyear1] = useState('')
    const [year2, setyear2] = useState('')
    const [semeter, setsemester] = useState('')
    const [min, setmin] = useState([])
    const navigate =useNavigate();
    const handleyear = (event) => {
        setyear1(event.target.value)
    }
    const handlemin = (event) => {
        setmin(event.target.value)
    }
    const handleyear2 =(event)=>{
        setyear2(event.target.value)
    }
    const handlesemester = (event) => { setsemester(event.target.value) }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(year1,year2, semeter, min)
        const user={year1,year2,semeter,min}
        fetch("http://localhost:5000/mincap",
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


console.log(user)

// const Seebrealdown =()=>{
//     navigate('/mincaptable')

// }



    return (
        <div>
            <div className='conatainer'>
                <form onClick={handleSubmit} className='container d-flex justify-content-around'>
                    <div className="mb-3">
                        <input onBlur={handleyear} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Year1' />
                    </div>
                    <div className="mb-3">
                        <input onBlur={handleyear2} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Year2' />
                    </div>
                    <div className="mb-3">

                        <input onBlur={handlesemester} type="text" className="form-control" id="exampleInputPassword1" placeholder='From Semester' />
                    </div>
                    <div className="mb-3">

                        <input  type="text" className="form-control" id="exampleInputPassword1" placeholder='To semester' />
                    </div>
                    <div className="mb-3">

                        <input onBlur={handlemin} type="text" className="form-control" id="exampleInputPassword1" placeholder='min' />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <Capcahart data={user}></Capcahart>

           <div>
               <h1 className='text-center m-5'>Details BreakDown</h1>
           <ChartTable data={user}></ChartTable>
           </div>
        </div>
    );
};

export default Capacity;