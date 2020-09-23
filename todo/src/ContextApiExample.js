import React from 'react';

// 기존에 자식에게 넘겨주는 방식
// export default function ContextApiText(){
//     const [cnt, setCnt] = React.useState(100);

//     return(   
//         <>

// {cnt}
//         <div>
//         <Child1 cnt={cnt}/>
//         </div>

//         </>
//     )
// }


// function Child1({cnt}){
//     return(
//     <div>
//         Child1
//         <Child2 cnt={cnt}/>
//     </div>)
// }

// function Child2({cnt}){
//     return(
//     <div>
//         Child2
//         <Child3 cnt={cnt}/>
//     </div>)
// }

// function Child3({cnt}){
//     return(
//         <div>
//             Child3<br/>
//             {cnt}
//         </div>
//     )
// }

//컨텍스트 방식
// const CntContext=React.createContext(0);

// export default function ContextApiText(){
//     const [cnt, setCnt] = React.useState(100);

//     return(   
//         <>
//             {cnt}
//         <div>
//         <CntContext.Provider value={cnt}>
//         <Child1/>
//         </CntContext.Provider>

//         </div>

//         </>
//     )
// }


// function Child1({cnt}){
//     return(
//     <div>
//         Child1
//         <Child2/>
//     </div>)
// }

// function Child2({cnt}){
//     return(
//     <div>
//         Child2
//         <Child3/>
//     </div>)
// }

// function Child3({cnt}){
//     return(
//         <CntContext.Consumer>{
//             (cnt)=>(<>
//                 <div>
//                 <span>부모가 보낸 숫자는???</span>
//                 <sapn>{cnt}</sapn>
//                 </div>
//                 </>)               
//         }</CntContext.Consumer>

//     )
// }


//컨텍스트 훅 사용하기
// <CntContext.Consumer>을 매번 써줘야하는 불편함을 해소할 수 있다.
// const CntContext = React.createContext(0);
// export default function ContextApiText() {
//     const [cnt, setCnt] = React.useState(100);
//     const changeCnt = (number) => {
//         setCnt(number)
//     }
//     return (
//         <>
//             {cnt}
//             <div>
//                 <CntContext.Provider value={{cnt, changeCnt}}>
//                     <Child1/>
//                 </CntContext.Provider>
//             </div>
//         </>
//     )
// }
// function Child1(){
//     return(
//         <div>
//             Child1
//             <Child2/>
//         </div>
//     )
// }
// function Child2(){
//     return(
//         <div>
//             Child2
//             <Child3/>
//         </div>
//     )
// }
// function Child3(){
//     const {cnt, changeCnt} = React.useContext(CntContext)
//     const click = () => {
//         changeCnt(100000)
//     }
//     return(
//         <div>
//             {cnt}
//             <button onClick={click}>변경</button>
//         </div>
//         // <CntContext.Consumer>
//         // {
//         //     (cnt) => (
//         //         <>
//         //             <div>부모에서 보낸 숫자는?</div>
//         //             <div>{cnt}</div>
//         //         </>
//         //     )
//         // }
//         // </CntContext.Consumer>
//     )
// }

// 리듀서와 같이 사용해보기
const CntContext = React.createContext();

const reducer=(prev, action)=>{
    const{type, value}=action;
    console.log(value)
    if(type==='CHANGE'){return value;}
    }
    

export default function ContextApiText() {
    const [cnt, dispatch] = React.useReducer(reducer, 100);
    return(
        <>
            {cnt}
            <div>
                <CntContext.Provider value={{cnt, dispatch}}>
                    <Child1/>
                </CntContext.Provider>
            </div>
        </>
    )
}
function Child1(){
    return(
        <div>
            Child1
            <Child2/>
        </div>
    )
}
function Child2(){
    return(
        <div>
            Child2
            <Child3/>
        </div>
    )
}
function Child3(){
    const {cnt, dispatch} = React.useContext(CntContext);
    const click = () => {
        dispatch({type: "CHANGE", value: 10000});
    }
    return(
        <div>
            {cnt}
            <button onClick={click}>변경</button>
        </div>
        // <CntContext.Consumer>
        // {
        //     (cnt) => (
        //         <>
        //             <div>부모에서 보낸 숫자는?</div>
        //             <div>{cnt}</div>
        //         </>
        //     )
        // }
        // </CntContext.Consumer>
    )
}