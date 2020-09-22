/* eslint-disable */
import React from 'react'
import 'App.css'
// import SRPGame from "SRPGame"
import Count from "Count"
import CompoWelcome from "CompoWelcome"
import CompoReact from "CompoReact"
import Compo_Button1 from "Compo_Button1"
import StateTest from "Change_state"
import Parents from "sangsok_soksung_P"
import Child from "sangsok_soksung_C"
import Add, { Add2, Add3 } from 'Add'
import Gugudan from 'Gugudan'
import TodoList from 'TodoList'
import Gugudan2 from 'Gugudan2'
import AppApp from 'ComponentEvent'
import HoverTest_Box from 'HoverTest'
import TodoList2 from 'TodoList2'
import CountArray from "UseEffect_CountArray"
import Useeffect_Clock from "Useeffect_Clock"
import Useeffect_Master from "Useeffect_Master"
import Useeffect_Clock2 from "Useeffect_Clock2"
import TestReducer from "TestReducer"
import TestReducer2 from "TestReducer2"
import TempReducer from "TempReducer"
import CssTest1 from 'CssTest1';
import CssTest2 from 'CssTest2';
import SRPGame_example from 'SRPGame_example';






function JsxTest() {
  const [a, setA] = React.useState(false);
  const user = 1;
  const datas = [1, 2, 3, 4, 5, 6, 7]
  const foods = ["옥수수", "피자", "라면"]
  const students = [ {name:"이수만", age:"60", address:"인천"}
                    ,{name:"유희열", age:"45", address:"서울"}
                    ,{name:"방시혁", age:"43", address:"부산"}
                    ,{name:"박진영", age:"34", address:"광주"}
                   ]
  
  //버튼 클릭시 상태 변화
  const [state, setState] = React.useState(true);
  
  const change = () => {
    if(state==true)setState(false)
    else if (state==false)setState(true)
  }

  // const change1 = (e) =>{
  //   setNum1(e.target.value)
  // }

  // const change2 = (e) =>{
  //   setNum2(e.target.value)
  // }


  return(
    <>
      <p></p>
      <table>
        <thead>
          <tbody>
            {students.map((students, index) =>
            {return <tr key={index}><td>{students.name}</td>
                                      <td>{students.age}</td>
                                      <td>{students.address}</td></tr>
              })}
          </tbody>
        </thead>
      </table>
      
      <p></p>
      {(() => {  //화면에 보여주기 위한 함수들을 넣자
                  if(state==true)
                    {return <div>참 입니다</div>}
                  else if (state==false)
                    {return <div>거짓 입니다.</div>}
                })()}     
      <div><button onClick={change}>눌러라라라라라라</button></div>

      <p></p>
      {foods.map((food,index) =>
       {return <div key={index}>{food}</div>})}

      <p></p>
      {datas.map((v, i) => {return <div>{v}{i}</div>})}
      
      <p></p>
      {a && true && <div>참 일경우만 나오는</div>}
      {a ? <div>참일경우</div> : <div>거짓말일경우</div>}

      <p></p>
      {
        (() => {
          //함수
          if(user==1){return <div>User가 1</div>}
          else if (user==2){return <div>User가 2</div>}
        })()
      }

      <p></p>
      {/* <div>
        <input value={num1} onChange={(e)=>setNum1(e.target.value)}/>
        <input value={num2} onChange={(e)=>setNum2(e.target.value)}/>
        <input value={Number(num1) + parseInt(num2)}/>
      </div> */}

    </>
  );
}


function App() {
  return (
    <div>
     {/* <SRPGame/> */}
     {/* <Count/> */}
     {/* <CompoWelcome/> */}
     {/* <CompoReact/> */}
     {/* <Compo_Button1/>  */}
     {/* <JsxTest/> */}
     {/* <StateTest/> */}
     {/* <Parents/> */}
     {/* <Gugudan x={3}/> */}
     {/* <Add x={10} y={20}/> */}
     {/* <Add2 x={10} y={20}/> */}
     {/* <Add3 x= y={20}/> */}
     {/* <TodoList/> */}
     {/* <Gugudan2/> */}
     {/* <AppApp/> */}
     {/* <HoverTest_Box/> */}
     {/* <TodoList2/> */}
     {/* <CountArray/> */}
     {/* <Useeffect_Clock/> */}
     {/* <Useeffect_Clock2/> */}
     {/* <TestReducer/> */}
     {/* <TestReducer2/> */}
     {/* <TempReducer/> */}
     {/* <CssTest1/> */}
     {/* <CssTest2/> */}
     {/* <SRPGame_example/> */}
     
    </div>
  );
}

export default App;
