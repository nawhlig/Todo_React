import React, {useReducer} from "react";

//prev : 이전값
//acrion : 어떤 행동일지?
    
const reducer = (prev, action) =>{
    console.log("이전값(prev)", prev);
    console.log("행동값?(action)", action);
    if(action.type === "CHANGE") { 
        return (action.value+1);
    }
}

export default function TempReducer(){

    const [cnt, dispatch] = useReducer(reducer, 0);
    const click =()=>{ dispatch( {type: "CHANGE", value: cnt} ); }
    

    return (
    <>
    <div>합계 숫자는 ? {cnt}</div>
    <div onClick={click}>클릭</div>
    </>
    );
}


// 인풋 박스 2개,   1증가 버튼,   2증가 버튼
// import React from 'react';

// const reducer = (prev, action) => {

//     const {type} = action;

//     if (type == "UP_CNT_1"){
//         return prev + 1;
//     }
//     else if (type == "UP_CNT_2"){
//         return prev + 2;
//     }
// }


// export default function TestReducer3() {

//     const [cnt, dispetch] = React.useReducer(reducer, 0)

//     const click = () => {
//         dispetch({type:"UP_CNT_1"})
//     }

//     const click2 = () => {
//         dispetch({type:"UP_CNT_2"})
//     }

//     return (
//         <>
//         <div>{cnt}</div>
//         <button onClick={click}>증가1</button>
//         <button onClick={click2}>증가2</button>
//         </>
//     )

// }