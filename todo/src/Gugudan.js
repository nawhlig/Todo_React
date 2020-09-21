import React, { useState } from "react";

export default function Gugudan({x}){
    
    //여기있는 내용들은 계속 실행됨
    const num = []

    for(let i=2; i<10; i++){num.push(i)}
    
    return(

        <div>
            {
                num.map((v,i)=>{return <div>{x}x{v}={x*v}</div>})
            }
        </div>

    )
}
