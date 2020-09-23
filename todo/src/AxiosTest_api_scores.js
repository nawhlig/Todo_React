import React, { useState } from 'react';
import Axios from 'axios';
import API from "AxiosSettings"


export default function AxiosTest2() {
    const [scores, setScoress] = React.useState([]);
    const [id, setid] = React.useState(null);
    
    React.useEffect(()=>{
        // 서버주소 설정 파일 생성 전
        // Axios.get("http://127.0.0.1:8000/api/study/students/")
        // 서버주소 설정 파일 생성 후
        API.get("study/scores/")
        .then(res => {console.log(res);
                        const { data } = res;
                        setScoress(data);
                    }
            ).catch(error=>{console.log(error);})
    }, [])

    const click =(e) =>{console.log(e.target.id);
                        setid(e.target.id);
                        }

    return(<>
        <div>
            {
                scores.map((v)=>{
                    return <div id={v.id} onClick={click}>{v.name}</div>
                })
            }
            <AxiosTest2Detail id={id}/>
        </div>
    </>)
}
function AxiosTest2Detail({id}) {

    const [score, setScore] = React.useState(null)

    React.useEffect(()=>{
        // 이렇게 쓸 수도 있음
        // API({
        //     method:"GET",
        //     url:"study/students/" + id
        // })
        // .then(res => {
        //     console.log(res);
        //     const { data } = res;  
        //     setStudent(data);
        // }).catch(error=>{
        //     console.log(error);
        // })
        API.get("study/scores/" + id)
        .then(res => {console.log(res);
                      const { data } = res;  
                      setScore(data);
                     }
            ).catch(error=>{console.log(error);})
        
        console.log("id가 변경됨")},[id])

    return(<>
    <div>
        {score && <div>
            <p>관리자:{score.username}</p>
            <p>관리번호:{score.id}</p>
            <p>수학점수{score.math}</p> 
            <p>과학점수{score.science}</p>    
            <p>영어점수{score.english}</p>
            <p>이메일{score.email}</p>
        </div>}
    </div>
    </>)
}