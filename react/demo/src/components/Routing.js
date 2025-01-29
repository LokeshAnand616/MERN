import { Link, Route, Routes ,BrowserRouter as Router} from "react-router-dom";
import {linkItems,routeItems} from '../assets/LinkItems.js'
function Routing(){    
    return(
        <>
        <Router>
            <ul id="app-ul">
                {linkItems.map(({to,lable},index)=>(
                    <li key={index}>
                        <Link id="link" to={to}>{lable}</Link>
                    </li>
                ))}
            </ul>
            <Routes>
                {routeItems.map(({path,element})=>(
                    <Route path={path} element={element}></Route>
                ))}
            </Routes>
            </Router>
        </>
    );
}

export default Routing;