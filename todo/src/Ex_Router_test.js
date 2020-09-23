import React from 'react';
import Axios from 'axios';
import API from "AxiosSettings";
import queryString from 'query-string';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import AxiosTest2 from 'AxiosTest_api_scores';





export default function RouterTest() {
    const active = {
        color:"red"
    }
    return (<>
        
        <div id="content">
        <Layout>{/*한 페이지에서 계속 바뀌는 부분 */}
            <Switch>
                <Route exact path="/" component={Home}/>
                {/* <Route path="/students/:id" component={Students_detail}/> */}
                <Route path="/students" component={Students}/>
                {/* <Route path="/scores/:id" component={Scores_detail}/> */}
                <Route path="/scores" component={Scores}/>                
                <Route component={NoPage}/>
            </Switch>
        </Layout>
        </div>

        </>)
}
function Layout({children}) {
    return (
        <>
        <p></p>
        {children}
        </>
    )
}
function NoPage({history, location, match})
{
    console.dir(location)
    console.dir(match)
    return(<>
        <div>표시할 페이지 없음</div>
    </>)
}
function Home({history, location, match})
{
    console.dir(location)
    console.dir(match)
    const click = () => {
        history.push('/students')
    }
    return(<>
        <div><a><Link to="/">Home</Link></a></div>
    </>)
}
function Students({location, match, history})
{
   
    return(<>
        <div>학생 목록</div>
        <div><AxiosStudents/></div>
    </>)
}

function Scores({location, match, history})
{
   
    return(<>
        <div>점수 목록</div>
        <div><AxiosScores/></div>
    </>)
}




// Axios 디비연동
function AxiosStudents() {
    const [student, setStudent] = React.useState([]);
    const [id, setid] = React.useState(null);
    
    React.useEffect(()=>{
        API.get("study/students/").then(res => {console.log(res);
                                              const { data } = res;
                                              setStudent(data);
                                             }
                                     ).catch(error=>{console.log(error);})
    }, [])

    return(<>
        <div>
            {
                student.map((v)=>{
                    console.log(v)
                    return(<>
                    
                    <p></p>
                    <div>ID: {v.id}  /  이름: {v.name}</div>
                    <div>주소: {v.address}/  메일: {v.email}</div>
                    <p></p>
                    
                    </>)})
            }
        </div>
    </>)
}
function AxiosScores() {
    const [scores, setScoress] = React.useState([]);
    const [id, setid] = React.useState(null);
    
    React.useEffect(()=>{
        API.get("study/scores/").then(res => {console.log(res);
                                              const { data } = res;
                                              setScoress(data);
                                             }
                                     ).catch(error=>{console.log(error);})
    }, [])

    return(<>
        <div>
            {
                scores.map((v)=>{
                    console.log(v)
                    return(<>
                    
                    <p></p>
                    <div>ID: {v.id}  /  이름: {v.name}</div>
                    <div>수학: {v.math}/  과학: {v.science}/  영어: {v.english}</div>
                    <p></p>
                    
                    </>)})
            }
        </div>
    </>)
}










//URL에 쿼리 넣었을때 쿼리 넣은 것 가져올 수 있음.
function Students_detail({location, match, history})
{
    console.dir(match);
    console.log(location.search);
    console.log(match.params);
    const qs = queryString.parse(location.search);
    console.dir(qs)
    return(
        <div>
            {match.params.id}
            {qs.name}
            {qs.address}
            {qs.email}
        </div>
    )
}
function Scores_detail({location, match, history})
{
    console.dir(match);
    console.log(location.search);
    console.log(match.params);
    const qs = queryString.parse(location.search);
    console.dir(qs)
    return(
        <div>
            {match.params.id}
            {qs.name}
            {qs.math}
            {qs.science}
            {qs.english}
        </div>
    )
}