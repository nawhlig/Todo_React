import React, { useState } from "react";

// 컴포넌트에 직접 이벤트를 줄수없다.
// 이벤트는 기본 HTML DOM 요소에만 줄수있어
// 함수를 속성으로 전달받아 DOM 요소에 지정

function EventTest({onClick}){
    return(
    <>
    <div onClick={onClick}>클릭하세요</div>
    </>)}

function AppApp(){
    let func=()=>{alert('이벤트발생')}
    return(
    <div>
        <EventTest onClick={func}/>
    </div>
    );}

export default AppApp;