import React from 'react';

export default function Useeffect_Clock2() {
    
    const[cnt,setCnt]=React.useState(-1);
    const[timer,setTimer]=React.useState([]);

    console.log('랜더링 될 때 마다');
    

    React.useEffect(() => {setCnt(cnt + 1)},[timer])
    console.log("타이머 내용 변경시 카운트 +1")

    const click = () => {setTimer([...timer, new Date()])}

    return(
    <>
    <div>타이머개수: {cnt} </div>
    <div><button onClick={click}>추가</button></div>
    <div> {timer.map((v) => { return <TimerTime startTime={v}/> })}</div>
                            {/* 현재시간만 표시 return <div>{v.toISOString()}</div>  */}
    </>
    )
}


//시간 옆에 타이머가 추가된 시간부터 몇 초가 지났는지 표시해주세요 (1초마다갱신)

function TimerTime({startTime}) {
    
    const [timer, setTimer] = React.useState(0);

     //컴포넌트가 생성될때 한번만
    React.useEffect(()=>{ 
        const inter = setInterval(
            ()=> {  //현재시간.getTime()-시작시간.getTIme() , 1초 =1000
                    setTimer(new Date().getTime() - startTime.getTime())
                }, 1000
        )
        // 삭제 기능이 없어 아직 안돌아감;
        // 인터벌로 만든 백그라운드로 돌아가는 컴포넌트 종료될때 실행
        return () => {clearInterval(inter)} 
    },[]) //컴포넌트 삭제시 [] 라고 씀

    return (
        <div>
            {startTime.toISOString()} / {parseInt(timer / 1000)} 초 지남
        </div>
    )
}