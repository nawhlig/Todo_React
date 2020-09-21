import React, { useState } from "react";

export default function Gugudan2(){

    
    const [text, setText] = useState(""); //인풋 상태값
    const num = [];

    //클릭시 동작
    const click = () => {        
        setText(""); // 인풋창에 쓴 텍스트 초기화
    }

    for(let i=2; i<10; i++){num.push(i)}
    
    return (
        <>
        <input value={text} //인풋에 텍스트값을 넣음
               onChange={(e)=>setText(e.target.value)}/>
        <button onClick={click}>리셋</button>
        {
            num.map((v,i)=>{return <div>{text}x{v}={text*v}</div>})
        }
        </>
    )
}