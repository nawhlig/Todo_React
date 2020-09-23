import React, { useState } from "react";


export default function HoverTest_Box(){
    //상태값 지정
    const [text, setText] = useState(0); //인풋 상태값


    const style={
    width:'100px',
    height:'100px',
    fontSize:'20px',
    backgroundColor:'yellow',
    textAlign:'center',
    lineHeight:'100px'
    }

    const over=()=>{setText(1)}

    const down=()=>{setText(0)}


    return(
    <>
    <div style={style}
        onMouseOver={over}
        onMouseOut={down}>{text}</div>
    </>
    )
    }

    //onMouseOver,onMouseOut이벤트사용
