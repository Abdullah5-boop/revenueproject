import React, { useState } from 'react';
import ClassRoomView from './ClassRoomView';
import CustomHookfor5 from './CustomHookfor5';
import "./style.css"
const ClassRoom = () => {
    const [Year, setyear] = useState('')
    const [Semester, setSemeter] = useState('')
    const [user, setuser] = useState([])
    const [list,setlist]=useState('')
    
    const lsit2=[];
    const handle = (event) => {
        setlist(event.target.innerText)
        lsit2.push(event.target.innerText)
        console.log(event.target.innerText)
    }
    const handleyear = (event) => {

        setyear(event.target.value)
    }
    const handleSemester = (event) => { setSemeter(event.target.value) }
    const handleSubmit = (event) => {
        event.preventDefault();

        const requestuser = { Year, Semester,list }
        console.log(requestuser)
        fetch("http://localhost:5000/ClassRoom",
            {
                headers: {

                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(requestuser)
            })
            .then(res => res.json())
            .then(data => setuser(data))

    }

console.log(list)




    return (
        <div>
            <div className='d-flex justify-content-around container '>
                <p className='rounded-3 bg-danger pointercoursor' onClick={handle}>1-20</p>
                <p className='rounded-3 bg-danger pointercoursor' onClick={handle}>20-30</p>
                <p className='rounded-3 bg-danger pointercoursor' onClick={handle}>31-35</p>
                <p className='rounded-3 bg-danger pointercoursor' onClick={handle}>36-40</p>
                <p className='rounded-3 bg-danger pointercoursor' onClick={handle}>41-50</p>
                <p className='rounded-3 bg-danger pointercoursor' onClick={handle}>51-55</p>
                <p className='rounded-3 bg-danger pointercoursor' onClick={handle}>56-64</p>
                <p className='rounded-3 bg-danger pointercoursor' onClick={handle}>65-124</p>
                <p className='rounded-3 bg-danger pointercoursor' onClick={handle}>125-168</p>
            </div>
            <form className='d-flex container justify-content-around' id='fromid' onSubmit={handleSubmit}>
                <div class="mb-3">
                    <input onBlur={handleyear} type="text" name='year' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <input onBlur={handleSemester} type="text" name='semester' class="form-control" id="exampleInputPassword1" />
                </div>
                <div><button type="submit" class="btn btn-primary">Submit</button></div>
            </form>
            <ClassRoomView Data={user}></ClassRoomView>
        </div>
    );
};

export default ClassRoom;