//아래와 같이 index.js 에 BrowserRouter 를 넣어주어도 된다!!!
// import React from 'react';
// import { BrowserRouter } from 'react-router-dom'
// import ReactDOM from 'react-dom';
// import 'index.css';
// import App from 'App';
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import React from 'react';
import queryString from 'query-string';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
export default function RouterTest() {
    const active = {
        color:"red"
    }
    return (        
        <>
        <div id="menu">
            <NavLink exact to="/" activeStyle={active}>Home</NavLink>
            <NavLink to="/students" activeStyle={active}>Students</NavLink>
        </div>
        <div id="content">
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/students/:id" component={Detail}/>
                <Route path="/students" component={Students}/>                
                <Route component={NoPage}/>
            </Switch>
        </Layout>
        {/* <Route path="/students" component={Students}/> */}
        </div>
        </>        
    )
}
function Layout({children}) {
    return (
        <>
        <div>디자인다지인~</div>
        {children}
        </>
    )
}
function Home({history, location, match})
{
    console.dir(location)
    console.dir(match)
    const click = () => {
        history.push('/students')
    }
    return(
        <div>
            HOME
            <button onClick={click}>Students</button>
            HOME
        </div>
    )
}
function NoPage({history, location, match})
{
    console.dir(location)
    console.dir(match)
    return(
        <div>
            NoPage
        </div>
    )
}
function Students({location, match, history})
{
    const click = () => {
        history.push('/')
    }
    return(
        <div>
            STUDENTS
            <button onClick={click}>go home</button>
            <a><Link to="/">go home</Link></a>
        </div>
    )
}
function Detail({location, match, history})
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
            {qs.age}
        </div>
    )
}


//NAVlink 와 Switch 예시

// import React from 'react';
// import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
// export default function RouterTest() {
//     const active = {
//         color:"red"
//     }
//     return (        
//         <BrowserRouter>
//         <div id="menu">
//             <NavLink exact to="/" activeStyle={active}>Home</NavLink>
//             <NavLink to="/students" activeStyle={active}>Students</NavLink>
//         </div>
//         <div id="content">
//             <Switch>
//                 <Route exact path="/" component={Home}/>
//                 <Route path="/students" component={Students}/>
//                 <Route component={NoPage}/>
//             </Switch>
//         </div>
//         </BrowserRouter>        
//     )
// }
// function Home()
// {
//     return(
//         <div>
//             HOME
//         </div>
//     )
// }
// function NoPage()
// {
//     return(
//         <div>
//             NoPage
//         </div>
//     )
// }
// function Students()
// {
//     return(
//         <div>
//             STUDENTS
//         </div>
//     )
// }