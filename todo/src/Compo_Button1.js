import React, { useState } from "react";

function Compo_Button1(){
    
    //버튼 클릭시 상태 변화 
    // //함수 1개로 사용
    const [state, setState] = useState("선택해주세요")

    const change = (e) => {
        console.dir(e.target)
        console.log(e.target.innerHTML)
        console.log(e.target.getAttribute("data"))
        console.log(e.target.getAttribute("name"))
        console.log(e.target.name)
        setState(e.target.innerHTML)
    }
    return (        
        <>
            <div>{state}</div>
            <div>
                <button data="바나나" name="바나나" onClick={change}>바나나</button>
                <button data="사과" name="사과" onClick={change}>사과</button>
                <button data="딸기" name="딸기" onClick={change}>딸기</button>
            </div>
        </>
    )
   
    // //함수 3개로 사용
    // const [cnt, setCnt] = React.useState("선택해주세요")
    // const clickb = () => {setCnt("바나나");} 
    // const clicka = () => {setCnt("사과");}
    // const clicks = () => {setCnt("딸기");}
  
    // return(
    // <>
    // <span>{cnt}</span>
    
    // <div>
    //   <button onClick={clickb}>바나나</button>
    //   <button onClick={clicka}>사과</button>
    //   <button onClick={clicks}>딸기</button>
    // </div>
    // </>)
}

export default Compo_Button1;

// const [cnt, setCnt] = React.useState(0)
  
//     const click = () => {
//       setCnt(cnt +1);
//     } 
  
  
//     return(
//       <div>합계숫자는? <span>{cnt}</span>
//       <div onClick={click}>클릭!</div></div>
//       );


// handleOnClick = () => {
//     console.log("Click")
// }

// render(){
//     return(
//         <div>
//             <button onClick = {this.handleOnClick}>
//                 출력
//             </button>
//         </div>