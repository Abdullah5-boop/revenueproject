import { useEffect, useState } from "react"

const CustomHookForTable1 = () => {
    const [user, setuser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/Table1')
            .then(res => res.json())
            .then(data => setuser(data))
    }, []);

    for (let i = 0; i < user.length; i++) {
       
        if (user[i].semester = "Spring") {
            user[i].total2 = user[i - 3]?.total;
        }
        if (user[i].semester = "Autumn") {
            user[i].total2 = user[i - 3]?.total;
        }
        if (user[i].semester = "Summer") {
            user[i].total2 = user[i - 3]?.total;
        }
    }
    for (let i = 0; i < user.length; i++) {
        let x = user[i].total2 - user[i].total
        let y = x / user[i].total

        let a= Math.ceil(y = y * 100)
        
        if(isNaN(a)===true)
        {
            user[i].change=0;
        }
        else user[i].change=a;
    }
   
   
    return [user, setuser]

}
export default CustomHookForTable1;