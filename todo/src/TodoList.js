import React, { useState } from 'react';

export default function TodoList(){

    const [todoList, setTodoList] = useState([]); //결과 상태값
    const [text, setText] = useState(""); //인풋 상태값
    // const ex = (e) => {
    //     setText(e.target.value)
    // }

    //클릭시 동작
    const click = () => {        
        setTodoList([...todoList,text]); //배열에 인풋의 텍스트값을 추가로 넣음
        setText(""); // 인풋창에 쓴 텍스트 초기화
    }

    return (
        <>
        <input value={text} //인풋에 텍스트값을 넣음
               onChange={(e)=>setText(e.target.value)}/>
        <button onClick={click}>추가</button>
        {
            todoList.map((v, i)=>{
                return <Todo i={i} v={v}/>
            })
        }
        </>
    )
}

function Todo({i, v}){
    return (
    <div>
        {i} {v}
    </div>
    )
}