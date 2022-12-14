import { Routes, Route } from 'react-router-dom';
import Authentication from '../screens/authentication';
import Screen from '../screens/screen';

const CustomRoute=()=>{
    return(
        <Routes>
            <Route path="/" element={<Authentication/>}/>
            <Route path="/*" element={<Screen/>}/>
        </Routes>
    )
}

export default CustomRoute;


