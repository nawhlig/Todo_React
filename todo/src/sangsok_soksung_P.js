import React from "react";
import Child from "sangsok_soksung_C"

function Parents()
{
    const[num, setNum] = React.useState(5)
    
    const changeNumber=(number)=>{setNum(number);}
    
    return(
        <>
        {num}
        <Child changeNumber={changeNumber}
            color={"red"}
            number={10}
            student={{name: "홍길동", age:35, address:"인천"}}/>
        </>
    )
}
export default Parents;