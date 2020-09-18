import React from 'react'
import 'App.css'
import Count from "Count"
import CompoWelcome from "CompoWelcome"
import CompoReact from "CompoReact"
import Compo_Button1 from "Compo_Button1"

function JsxTest() {
  const [a, setA] = React.useState(false);
  const user = 1;
  return(
    <>
      {a && true && <div>참 일경우만 나오는</div>}
      {a ? <div>참일경우</div> : <div>거짓말일경우</div>}

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
