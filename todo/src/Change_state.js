import React from "react";

function StateTest(){
    const [num,setNum]=React.useState(100);
    const [txt,setTxt]=React.useState('안녕하세요');
    const [obj,setObj]=React.useState({name:'홍길동',age:30,address:'인천시'});
    const click=()=>{
        setNum(num+1);
        setObj({...obj,name:'이진범'});
        }
    const [student,setStudent]=React.useState({name:'홍길동',math:80,science:30,english:60});
    const [number,setNumber]=React.useState([1,2,3,4,5,6,7,8,9]);

    //오브젝트 형식
    const click2=()=>{
        setStudent({...student,math:0, science:0, english:0 });
    }

    //리스트 형식
    const click3=()=>{
        setNumber([...number.slice(0,4), 0, 0, ...number.slice(6,10)])
    }



    return(
            <>
            <div>{num}</div>
            <div>{txt}</div>
            <div>{obj.name}</div>
            <div>{obj.age}</div>
            <div>{obj.address}</div>
            {num}
            {JSON.stringify(obj)}
            <button onClick={click}>클릭</button>

            <pre>아래와 같이 상태값을 만들고 버튼을 누르면 점수를 모두0 으로 바꿔주세요
            {JSON.stringify()}
            </pre>
            {JSON.stringify(student)}
            <button onClick={click2}>클릭</button>

            <pre>아래와 같이 상태값을 만들고 버튼을 누르면5와 6을 0으로 바꿔주세요.
            {JSON.stringify()}
            </pre>
            {JSON.stringify(number)}
            <button onClick={click3}>클릭</button>

            

            

        </>
    )
}

export default StateTest;