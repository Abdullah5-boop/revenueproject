import React from 'react';

const Table1Views = (props) => {

    const user = props.data
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
    for(let i=0;i<user.length;i++)
    {
        let x= user[i].total2-user[i].total
        let y=x/user[i].total
        
        user[i].change=Math.ceil( y=y*100)


    }

    return (
        <div>
            <h1>tableviw</h1>
        </div>
    );
};

export default Table1Views;