const { useState, useEffect } = require("react")

const CustomHoolsrc = (value) => {
    
    for(let i=0;i<value.length;i++)
    {
        
        let a = value[i]?.revenue-value[i-1]?.revenue;
        a=a/value[i]?.revenue;
        a=a*100
        let b=Math.ceil(a);
        value[i].change=b;
       
    }
    // console.log(value[2]?.revenue);
    return value


}
export default CustomHoolsrc