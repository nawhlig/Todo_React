import React, {useReducer} from "react";

//prev : 이전값
//acrion : 어떤 행동일지?
    
const reducer = (prev, action) =>{
    if(action.type === "CHANGE") {
        console.log(prev);
        return (action.value);
    }
}

export default function TestReducer(){

    const [name, dispatch] = useReducer(reducer, "홍길동");
    const click =()=>{ dispatch( {type: "CHANGE", value: "이몽룡"} ); }
    

    return (
    <>
    <div>{name}</div>
    <div onClick={click}>클릭</div>
    </>
    );
}
