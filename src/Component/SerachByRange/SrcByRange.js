import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomHoolsrc from './CoustomHooksrc';
import Srcview from './Srcview';

const SrcByRange = () => {
    const nagivage = useNavigate()
    const [semster, setsemeter] = useState('')
    const [Year1, setryear1] = useState('')
    const [Year2, setryear2] = useState('')
    const [school, setSchool] = useState('')
    const [user,setuser]=useState([]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log( Year1,Year2, semster, school)
        const user = { Year1,Year2, semster, school }

        fetch("http://localhost:5000/input",
            {
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>setuser(data) )
    }
    const HandleSemster = (event) => {

        setsemeter(event.target.value)

    }
    const Handleyear1 = (event) => {
        event.preventDefault();
        setryear1(event.target.value)

    }
    const Handleyear2 =(event)=>{
        setryear2(event.target.value)
    }
    const HandleSchool = (event) => {
        event.preventDefault();
        setSchool(event.target.value)

    }



    const value=CustomHoolsrc(user)

    return (
        <div>

            <div className='container'>
                <form onSubmit={handleSubmit} className='d-flex justify-content-around align-items-center'>
                <div className="form-group">
                        <label>School Title</label>
                        <input onBlur={Handleyear1} type="text" className="form-control" id="exampleInputPassword1" placeholder="year" />
                    </div>
                <div className="form-group">
                        <label>School Title</label>
                        <input onBlur={Handleyear2} type="text" className="form-control" id="exampleInputPassword1" placeholder="year" />
                    </div>
                    <div className="form-group">
                        <label>From</label>
                        <input onBlur={HandleSemster} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" semester " />
                    </div>
                    <div className="form-group">
                        <label>To</label>
                        <input onBlur={HandleSchool} type="text" className="form-control" id="exampleInputPassword1" placeholder="school " />
                    </div>
                    
                    <br />
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
              
            </div>
            <Srcview data={value}></Srcview>
        </div>
    );
};

export default SrcByRange;