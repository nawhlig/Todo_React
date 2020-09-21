import React from "react";
// 상속받는 방법 2
function Child({number, color, student, changeNumber})
{
    console.log(number)
    console.log(color)
    console.log(student)
    const click = () => {
        changeNumber(10)
      }
      return(
        <>
        <button onClick={click}>클릭</button>
        </>
      )
}

export default Child;

// 상속받는 방법 1
// function Child({changeNumber, color, number, student})
// {
//   // const x = {name:"홍길동", age:35};
//   // const {name, age} = x;  
//   console.log(number)
//   console.log(color)
//   console.log(student)
//   const click = () => {
//     changeNumber(10)
//   }
//   return(
//     <>
//     <button onClick={click}>클릭</button>
//     </>
//   )
// }
