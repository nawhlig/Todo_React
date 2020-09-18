import React from 'react'
import 'App.css'
import Count from "Count"
import CompoWelcome from "CompoWelcome"
import CompoReact from "CompoReact"
import Compo_Button1 from "Compo_Button1"

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
      {
        (
          () => {
                  //함수
                  // const change = (e) => {
                  if(state==true)
                    {return <div>참 입니다</div>}
                  else if (state==false)
                    {return <div>거짓 입니다.</div>}
                  // }
                }
        )()
      }     
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



    </>
  );
}


function App() {
  return (
    <div>
     <Count/>
     <CompoWelcome/>
     <CompoReact/>
     <Compo_Button1/>
     <JsxTest/>
    </div>
  );
}

export default App;
