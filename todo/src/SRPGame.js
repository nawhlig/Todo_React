import React, { useState } from "react";






export default function SRPGame (){

    const [playerclick, setplayerclick]=React.useState("")
    const [playersrp, setplayersrp]=React.useState(0)
    const [CSrp, setCSrp]=React.useState(0)
    
    
    let CsrpView = CSrp

         // 1~3 까지 랜덤 숫자 구하기  Math.floor(Math.random()*3)+1
         
  
    const clicks = () => {setplayerclick("가위"); setplayersrp(1);  console.log("사람", playersrp);
                          setCSrp(Math.floor(Math.random()*3)+1);  //   console.log("랜덤", CSrp);

                          //   console.log("컴퓨터", CsrpView);
                          
                        

                        }
    const clickr = () => {setplayerclick("바위"); setplayersrp(2);
                            console.log(playersrp);

                        }                                   
    const clickp = () => {setplayerclick("보"); setplayersrp(3);
                            console.log(playersrp);

                        }
    
    
   

    return(
    <>
    <div> 셋중 하나를 선택 해 주세요</div>
    <div>
    <span onClick={clicks}>가위</span>
    <span onClick={clickr}>바위</span>
    <span onClick={clickp}>보</span>
    </div>
    <div>
    <span>사람 {playerclick}</span>
    <span>{ (()=>{ if(CsrpView==1){return "컴퓨터: "가위"}
                        else if (user==2){return <div>User가 2</div>}
                }
    } </span>
    <div>
        <Judgment/>
    </div>
    </div>
    </>
    )
}


function Computersrp(){


    if CsrpView == 1 
}
// var headline = (
//     <h1>
//       { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
//     </h1>
//   );
//   만약 age가 drinkingAge보다 크거나 같다면 Buy Drink가 <h1> 태그 안에 들어가게 되고 그렇지 않으면 Do Teen Stuff가 출력이 되게 됩니다. 


// 컴퓨터 

function Judgment(){
    return (
    <div>
        "비겼습니다"
    </div>
    )
}
